const userservice=require('../services/userService');
const roleservice=require('../services/roleService');
const {user,role}=require('../models/index');



const checkadmin=async(req,res,next)=>{
    const user=await userservice.getUserbyEmail(req.body.email);
    const role=await roleservice.getRoleByName('admin');
    const isadmin=await user.hasRole(role);
    if(!isadmin){
        return res.json({
            message:'user is not admin',
            code:401,
            err:'invalid admin'
        });
    }
    next();
}


module.exports={
    
    checkadmin,
    
}