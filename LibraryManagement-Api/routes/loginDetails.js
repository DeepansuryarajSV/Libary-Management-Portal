const express=require('express');
const router=express.Router();
const AdminModel = require('../models/AdminModel');
const UserModel = require('../models/UserModel');


async function checkUserExists(username, password, type) {
    if (type == "Admin"){
        try {
            // Find a user with the provided username and password
            const user = await AdminModel.findOne({ email: username, password: password }).exec();
        
            if (user) {
                const {name} = user;
                console.log('User exists');
                return name;
            } else {
                console.log('User does not exist');
                return false;
            }
          } catch (error) {
                console.error('Error checking user:', error);
                return false;
          }
    }
    else{
        try {
            // Find a user with the provided username and password
            const user = await UserModel.findOne({ email: username, password: password }).exec();
        
            if (user) {
              const {name} = user;
              console.log(name);
              console.log('User exists');
              return name;
            } else {
              console.log('User does not exist');
              return false;
            }
          } catch (error) {
            console.error('Error checking user:', error);
            return false;
          }
    }
  }

  

router.post("/loginDetails", async (req,res) => {
    const email = req.body.Email;
    const password = req.body.Password;
    const type = req.body.Type;

    const result = await checkUserExists(email,password,type);

    if(result){
        res.send(result);
    }
    else{
        res.send("invalidUser");
    }
})

module.exports = router;