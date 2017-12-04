/*jshint esversion: 6 */ 
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const expressSession = require('express-session');
const db = require('./models');
const workoutRoutes = require('./routes/workouts');



//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({ secret: process.env.EXPRESS_SESSION_SECRET }));
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session());


//Passport facebook strategy
passport.use(new facebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID ,
  clientSecret: process.env.FACEBOOK_SECRET_ID,
  callbackURL: 'http://localhost:4040/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'email']
},
function(accessToken, refreshToken, profile, done) {
  console.log("this is the prfole id : " + JSON.stringify(profile))
  debugger
   db.User.findOne({fbId : profile.id}, function(err, oldUser){
       if(oldUser){
           done(null,oldUser);
       }else{
           var newUser = new db.User({
               facebook_idb : profile.id ,
               email : profile.emails[0].value,
               display_name : profile.displayName,
               // picture: profile.picture
           }).save(function(err,newUser){
               if(err) throw err;
               done(null, newUser);
           });
       }
   });
 }
));

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser(function(id, done) {
    db.User.findById(id,function(err,user){
        if(err) done(err);
        if(user){
            done(null,user);
        }else{
            Users.findById(id, function(err,user){
                if(err) done(err);
                done(null,user);
            });
        }
    });
});

function authenticatedOrNot(req, res, next){
    if(req.isAuthenticated()){
        next();
    }else{
        res.redirect("/login");
    }
}

function userExist(req, res, next) {
    Users.count({
        username: req.body.username
    }, function (err, count) {
        if (count === 0) {
            next();
        } else {
            // req.session.error = "User Exist"
            res.redirect("/singup");
        }
    });
}

app.get('/', (req,res )=>res.sendFile('index.html'));
app.get('/auth/facebook', passport.authenticate('facebook', { scope:"email"}));
app.get("/auth/facebook/callback",
    passport.authenticate("facebook",{ failureRedirect: '/login'}),
    function(req,res){
        res.render("index", {user : req.user});
        
    }
);
app.use('/api/workouts', workoutRoutes);

app.get('/user', function(req, res){
  var user_id = req.user
  console.log(user_id);
});
app.listen(process.env.PORT || 4040)