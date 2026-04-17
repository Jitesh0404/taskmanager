const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;


//middleware
app.use(cors());
app.use(express.json());


//conntecting to the database
// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(()=>{
//     console.log("Connected to the database");
// }).catch((err)=>{
//     console.log("Error connecting to the database",err);
// });

// listening to the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})