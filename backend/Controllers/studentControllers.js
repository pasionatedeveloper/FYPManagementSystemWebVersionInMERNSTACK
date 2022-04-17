exports.createNewStudent=(req,res,next)=>{
    res.send("Student Registration Request");
}

exports.loginStudent=(req,res,next)=>{
    res.send("Student Login Request");
}

exports.getAllStudents=(req,res,next)=>{
    res.send("Get All Students Request");
}

exports.getSingleStudent=(req,res,next)=>{
    res.send("Get Single Student Request");
}

exports.updateStudent=(req,res,next)=>{
    res.send("Update Student Request");
}

exports.deleteStudent=(req,res,next)=>{
    res.send("Delete Student Request");
}
