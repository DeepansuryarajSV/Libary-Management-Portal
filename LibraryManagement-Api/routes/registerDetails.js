const express=require('express');
const router=express.Router();
const insertAdminModel = require('../models/AdminModel');
const insertUserModel = require('../models/UserModel');

function validateEmail(email) {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    
    // Check if "@" and "." are present and in the correct positions
    if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
      // Check if there is at least one character before "@" and after "."
      if (atIndex > 1 && dotIndex < email.length - 2) {
        return true;
      }
    }
    return false;
}

async function storeDetails(CName, CEmail, CPassword,Type){
    console.log(CName);
    console.log(CEmail);
    console.log(CPassword);
    console.log(Type);
    console.log("into store details");


    const data = {
        name: CName,
        email: CEmail,
        password: CPassword
    };
    
    try {
        if(Type === "Admin"){
            const newUser = new insertAdminModel(data);
            const result = await newUser.save();
            console.log("Data inserted:", result);
            return result;
        }
        else{
            const newUser = new insertUserModel(data);
            const result = await newUser.save();
            console.log("Data inserted:", result);
            return result;
        }      
        
      } catch (error) {
        console.log("Error: " + error);
      }
    

}

router.post("/registerDetails", (req,res) => {
    const name = req.body.Name;
    const email = req.body.Email;
    const password = req.body.Password;
    const type = req.body.Type;


    const emailcheck = validateEmail(email);
    if(emailcheck){
        res.send("success");
        const result = storeDetails(name,email,password,type);
    }else{
        res.send("Error");
    }
    console.log("Email check result  " + emailcheck);
    console.log(name + " " + email + " " + password + " " + type);
})

module.exports = router;