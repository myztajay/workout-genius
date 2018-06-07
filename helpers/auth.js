const passport = require('./passport_global/passportGlobal.js').PASSPORT;
const facebookStrategy = require('passport-facebook').Strategy;
const db = require('../models');

exports.getAuthUser = (req,res) => {
    console.log('##########Attention#######'+ req.user);
    res.send(req.user);
}
exports.authFacebook = passport.authenticate('facebook', { scope: ["email", "user_friends", 'public_profile']});
exports.authFacebookCallback = passport.authenticate("facebook", { failureRedirect: '/' });
exports.logout = (req,res) =>  {
    //req.logout() from passport.js would not work.
    req.session.destroy(function (err) {
        res.redirect('/');
        });
 };
