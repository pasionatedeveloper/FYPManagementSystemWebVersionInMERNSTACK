const express = require('express');
const app = express();
const adminRoutes=require('./Routes/adminRoutes');
const studentRoutes=require('./Routes/studentRoutes');
const facultyRoutes=require('./Routes/facultyRoutes');
const committeMemberRoutes=require('./Routes/committeeMemberRoutes');
const connectDB = require('./config/config');


connectDB();



const PORT_NUMBER = 5000;




app.use('/api/v1',adminRoutes);
app.use('/api/v1',studentRoutes);
app.use('/api/v1',facultyRoutes);
app.use('/api/v1',committeMemberRoutes);



app.listen(PORT_NUMBER,()=>{
    console.log(`Example app listening on port ${PORT_NUMBER}`)
});