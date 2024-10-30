const express= require("express");
const User = require("../models/userModel"); //import the user model no need to assign it anywhere , it will create db in mongoDB, check in cmd : show dbs

const router = express.Router();

//GET Users API
router.get("/",async (req,res)=>{   // this is a default API 
    // res.send("api running");
    try{ 
        const showUsers = await User.find();
        res.status(200).json(showUsers)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
});

//GET User API
router.get("/:id",async (req,res)=>{   // this is a default API 
    const {id} = req.params;
    try{ 
        const showUser = await User.findById({_id:id});
        res.status(200).json(showUser)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
});

//DELETE User API
router.delete("/:id",async (req,res)=>{   // this is a default API 
    const {id} = req.params;
    try{ 
        const showUser = await User.findByIdAndDelete({_id:id});
        res.status(200).json(showUser)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
});

//POST API
router.post("/", async (req,res)=>{
    
    // var name = req.body.name;// will be able to access the name's value
    
    // destructurize the body
    const {name, email, mobile, password} = req.body;

    try{ 
        const userData = await User.create({
            name: name,
            email: email,
            mobile: mobile,
            password: password
        });
        res.status(201).json(userData)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
});

//UPDATE API
router.put("/:id", async (req,res)=>{
    
    // var name = req.body.name;// will be able to access the name's value
    // destructurize the body
    const {id} = req.params;

    try{ 
        const updateUser = await User.findByIdAndUpdate(id,req.body,{
            new : true,
        });
        
        res.status(201).json(updateUser)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
});

module.exports = router;