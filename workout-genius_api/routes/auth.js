const express = require('express');
const router = express.Router();
const authHelpers = require('../helpers/auth');

router.route('/userauth') 
  .get(authHelpers.getAuthUser)

router.route('/facebook')
  .get(authHelpers.authFacebook)
  
router.route('/facebook/callback')
  .get(authHelpers.authFacebookCallback)

router.route('/logout')
  .get(function (req, res){
    console.log("logoff")
    delete req.session;
    req.session.destroy(function (err) {
      res.redirect('/'); //Inside a callback… bulletproof!
    });
})
  
module.exports = router;