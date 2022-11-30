const roleservice=require('../services/roleService')


    const addingroletouser=async(req,res)=>{
        const response=await roleservice.addingroletouser(req.body.userId, req.body.roleId);
        if(!response){
            return res.json({
                message:'role is not added',
                code:400
            })
        }
        else{
            return res.json({
                message:'role is  added succesfully',
                code:400,
                success:true
            })
        }
    
    }
module.exports={addingroletouser}