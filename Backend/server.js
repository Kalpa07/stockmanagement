const express= require("express");
const app = express(); //app is object instance of express package which is framework of node.js with more optimization
const mongoose = require("mongoose");
const dotenv= require("dotenv");  //uses dotenv package
// const User = require("./models/userModel"); //import the user model no need to assign it anywhere , it will create db in mongoDB, check in cmd : show dbs

dotenv.config();   //uses variables from env file

const {connectMongoDb} =require("./connection");
const userRoute = require("./routes/userRoute");
app.use(express.json());


//------CONNECTION-----
//Mongoose is used to connect mongoDB, 
//mongodb://127.0.0.1:27017/ this can be found if you run mongosh command in cmd, in c drive
// mongoose.connect("mongodb://127.0.0.1:27017/stockdb")  writing it this way is not secure, so we have created env file

connectMongoDb(process.env.URI);
// mongoose.connect(process.env.URI)  //connects to mongodb and creates stockdb in mongodb
// .then(()=>{
//     console.log("connected successfully");
//     app.listen(process.env.PORT || 8000 ,(err)=>{
//         if(err) console.log("error:", err);
        
//         console.log("running successfully at ", process.env.PORT)
//     });   // we can put this stmt anywhere, but here it will run only if we are connected to db
// })
// .catch((error)=>{
//     console.log("error",error);
// })
//-------------------------------------

app.use("/api/user", userRoute);
app.listen(process.env.PORT || 8000, (err) => {
    if (err) console.log("error:", err);

    console.log("running successfully at ", process.env.PORT)
});  