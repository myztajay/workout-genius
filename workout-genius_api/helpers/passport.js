const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const db = require('../models');

//Passport facebook strategy
exports.passportInit = passport.use(new facebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID ,
  clientSecret: process.env.FACEBOOK_SECRET_ID,
  callbackURL: '/api/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'email']
},
function(accessToken, refreshToken, profile, done) {
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

exports.serialize = passport.serializeUser((user, cb) => cb(null, user));
exports.deserialize = passport.deserializeUser(function(id, done) {
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