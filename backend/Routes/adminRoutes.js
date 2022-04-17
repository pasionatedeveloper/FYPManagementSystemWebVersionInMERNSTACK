const express = require('express');
const { route } = require('./studentRoutes');
const {registerAdmin,adminLogin,adminUpdate,adminDelete} = require('../Controllers/adminControllers');
const app = express();
const router = express.Router();




router.route('/register/admin').post(registerAdmin);
router.route('/login/admin').get(adminLogin);
router.route('/upate/admin').put(adminUpdate);
router.route('/delete/admin').delete(adminDelete);




module.exports=router;