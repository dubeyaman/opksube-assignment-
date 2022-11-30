const {user,role}=require('../models/index')

const addingroletouser=async(userId,roleId)=>{
    const USER=await user.findOne({
        where:{
            id:userId
        }
    });
    const ROLE=await role.findOne({
        where:{
            id:roleId
        }
    });

    await USER.addRole(ROLE);
    return USER
}
const getRoleByName=async(name)=>{
    const response=await role.findOne({
        where:{
            name:name
        }
    });
    return response;
}
module.exports={addingroletouser,getRoleByName}