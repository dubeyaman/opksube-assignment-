const userservice=require('../services/userService')

const getsignin=async(req,res)=>{
    const response=await userservice.getsignin(req.body)
    return res.json({
        message:'succesfully signup the user',
        success:true,
        code:200,
        data:response
    })
}

const signuptheuser=async(req,res)=>{
    const response=await userservice.getUserbyEmail(req.body.email)
    if(!response){
        return res.json({
            message:'email not foundtry again signup the user',
            success:true,
            code:200,
            err:'reenter the email'
        })
    }
    
    else{
        const correctpassword=await userservice.verifypassword(req.body.password,response.password)
        if(!correctpassword)
        return res.json({ 
            message:'password is incorrect',
            success:true,
            code:200,
            err:'reenter the password'
        })
        else{
            return res.json({
                message:'succesfully fetch the user',
                success:true,
                code:200,
                data:response
            })
        }
    }
}
module.exports={
    getsignin,signuptheuser
}