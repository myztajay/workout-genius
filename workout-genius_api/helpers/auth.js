const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const db = require('../models');

exports.getAuthUser = (req,res) => res.send(req.user || 'Jimmy');
exports.authFacebook = passport.authenticate('facebook', { scope:"email"});
exports.authFacebookCallback = passport.authenticate("facebook", { 
  successRedirect: '/',
  failureRedirect: '/'});

  
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
  
