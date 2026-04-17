const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { taskModel } = require('./src/models');
const { taskRoutes } = require('./src/routes');

require('dotenv').config();
const PORT = process.env.PORT;

console.log(taskModel);
//middleware
app.use(cors());
app.use(express.json());


// routes
app.use("/tasks", taskRoutes);


//conntecting to the database
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to the database");
}).catch((err)=>{
    console.log("Error connecting to the database",err);
});

// listening to the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})