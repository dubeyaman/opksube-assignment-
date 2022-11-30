const {user}=require('../models/index')
const bcrypt=require('bcryptjs');
const roleservice = require('./roleService');

const getsignin=async(data)=>{
    const salt = bcrypt.genSaltSync(10);
const hashpassword = bcrypt.hashSync(data.password, salt);
    const response=await user.create({
        email:data.email,
        password:hashpassword,
        username:data.username

    })
    const customerRole = await roleservice.getRoleByName('renter');

    //assigning the role of customer by default
    await response.addRole(customerRole);
    return response;
}

const getUserbyEmail=async(email)=>{
    const response=await user.findOne({
        where:{
            email:email
        }
    })
    return response
}
const verifypassword=async(password,hashpassword)=>{
    const response=await bcrypt.compareSync(password,hashpassword);
    return response;
}

module.exports={
    getsignin,getUserbyEmail,verifypassword
}