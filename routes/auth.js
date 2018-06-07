const express = require('express');
const router = express.Router();
const authHelpers = require('../helpers/auth');

router.route('/userauth') 
  .get(authHelpers.getAuthUser)

router.route('/facebook')
  .get(authHelpers.authFacebook)
  
router.route('/facebook/callback')
  .get(authHelpers.authFacebookCallback, (req,res) => res.redirect('/'))

router.route('/logout')
  .get(authHelpers.logout)
  
module.exports = router;