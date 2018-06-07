const passport= require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const db = require('../../models');

//Passport facebook strategy
passport.use(new facebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID ,
    clientSecret: process.env.FACEBOOK_SECRET_ID,
    callbackURL: '/api/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'emails', 'picture.type(large)']
  },
  (accessToken, refreshToken, profile, cb) => {
    //https://github.com/drudge/mongoose-findorcreate
    db.User.create({facebook_id: profile.id},
    function(err,val){
        db.User.findOrCreate(
            {facebook_id: profile.id},
            {facebook_photo : profile.photos[0].value,
                email : profile.emails[0].value,
                display_name : profile.displayName}, 
            (err, user) => {        
            // user is either the user that exist or the user that was created 
            // cb(user) will is provided by facebookstrategy to assign the user to req.user
           return cb(err, user);
        })
    }
    )
  }
));
// need for sessions check Passport Docs
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
        done(err, user);
    });
});

exports.PASSPORT = passport;
