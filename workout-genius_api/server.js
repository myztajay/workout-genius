const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const facebookStrategy = require('passport-facebook');
require('dotenv').config()


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')({ secret: process.env.EXPRESS_SESSION_SECRET, resave: true, saveUninitialized: true }));


passport.use(new facebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID ,
  clientSecret: process.env.FACEBOOK_SECRET_ID,
  callbackURL: 'http://localhost:4040/auth/facebook/callback'
}, 
(accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
}))


app.get('/', (req,res )=>{
  res.sendFile('index.html')
})

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  // passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



app.listen(process.env.PORT || 4040, ()=>{
  console.log("server started");
})