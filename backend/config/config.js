const mysql = require('mysql');

const connectDB=()=>{

    const conn = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database: 'fyp-management-system' 
    });
    
    conn.connect(function(err){
     if(err) throw err;
     console.log("Connected");
    });
}

module.exports=connectDB;