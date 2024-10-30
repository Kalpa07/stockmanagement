const mongoose = require("mongoose");

async function connectMongoDb(url){

    mongoose.connect(url)  //connects to mongodb and creates stockdb in mongodb
    .then(()=>{
        console.log("connected successfully");
        // app.listen(process.env.PORT || 8000 ,(err)=>{
        //     if(err) console.log("error:", err);
            
        //     console.log("running successfully at ", process.env.PORT)
        // });   // we can put this stmt anywhere, but here it will run only if we are connected to db
    })
    .catch((error)=>{
        console.log("error",error);
    })
}

module.exports = {
    connectMongoDb,
}