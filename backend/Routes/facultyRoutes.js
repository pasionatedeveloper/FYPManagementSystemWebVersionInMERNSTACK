const express = require('express');
const app = express();
const router = express.Router();
const {registerFacultyMember,facultyMemberLogin,updateFacultyMember,deleteFacultyMember,getAllFacultyMembers,getSingleFacultyMemberProfile} = require('../Controllers/facultyControllers');



router.route('/api/v1').post(registerFacultyMember);
router.route('/api/v1').get(facultyMemberLogin);
router.route('/api/v1').get(getAllFacultyMembers);
router.route('/api/v1').put(updateFacultyMember);
router.route('/api/v1').delete(deleteFacultyMember);



module.exports=router;