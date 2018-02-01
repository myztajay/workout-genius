const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const db = require('../models');
const logout = require('express-passport-logout');

exports.getAuthUser = (req,res) => res.send(req.user);
exports.authFacebook = passport.authenticate('facebook', { scope: ["email", "user_friends", 'public_profile']});
exports.authFacebookCallback = passport.authenticate("facebook", { 
  successRedirect: '/',
  failureRedirect: '/'});
exports.logout = (req,res) =>  {
    return function (req, res, next) {
        req.logout();
        delete req.session;
        next();
    };
 };
  //Passport facebook strategy
exports.passportInit= passport.use(new facebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID ,
    clientSecret: process.env.FACEBOOK_SECRET_ID,
    callbackURL: '/api/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'emails', 'picture.type(large)']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
     db.User.findOne({facebook_id: profile.id}, function(err, oldUser){
         if(oldUser){
             done(null,oldUser);
         }else{
             var newUser = new db.User({
                 facebook_id : profile.id,
                 facebook_photo : profile.photos[0].value,
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
  
