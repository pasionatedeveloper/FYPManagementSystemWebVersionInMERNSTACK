const express = require('express');
const app = express();
const router = express.Router();

const {createNewStudent,loginStudent,getAllStudents,getSingleStudent,updateStudent,deleteStudent} = require('../Controllers/studentControllers');


router.route('/student/register').post(createNewStudent);
router.route('/student/login').get(loginStudent);
router.route('/student/delete').delete(deleteStudent);
router.route('/student/update').put(updateStudent);
router.route('/student/get').get(getSingleStudent);
router.route('/student/getAllStudents').get(getAllStudents);


module.exports = router;