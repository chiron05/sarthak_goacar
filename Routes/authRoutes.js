const {Router}=require('express');
const authenticatToken = require('../Auth/verify');
const { login_post, signup_post, logout_get } = require('../Controllers/authController');
const router=Router();

router.post('/login',login_post);
router.post('/signup',signup_post);
router.get('/logout',authenticatToken,logout_get);



module.exports=router