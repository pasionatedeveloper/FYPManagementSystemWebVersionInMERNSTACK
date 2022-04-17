const express = require('express');
const app = express();
const router = express.Router();

const {createNewStudent,loginStudent,getAllStudents,getSingleStudent,updateStudent,deleteStudent} = require('../Controllers/studentControllers');


router.route('/committeeMember/register').post(createNewStudent);
router.route('/committeeMember/login').get(loginStudent);
router.route('/committeeMember/delete').delete(deleteStudent);
router.route('/committeeMember/update').put(updateStudent);
router.route('/committeeMember/get').get(getSingleStudent);
router.route('/committeeMember/getAllMembers').get(getAllStudents);


module.exports = router;