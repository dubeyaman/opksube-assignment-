
const BookService=require('../services/service')

const getallbook=async(req,res)=>{

    const response=await BookService.getallbook();
    return res.json({
        message:'succesfully fetched the data',
        code:200,
        data:response
    })

}
const addnewbook=async(req,res)=>{
    const result=await BookService.addnewbook(req.body)
    return res.json({
        message:'succesfully created the data',
        code:200,
        data:result
    })
}

const getbyname=async(req,res)=>{
    const response=await BookService.getbyname(req.query.name,req.body)
    return res.json({
        message:'succesfully udated the data',
        code:200,
        data:response
    })

}
const getbyid=async(req,res)=>{
    const response=await BookService.getbyid(req.params.id)
    return res.json({
        message:'succesfully deleted the data',
        code:200,
        data:response
    })

}

module.exports={
    getallbook,addnewbook,getbyname,getbyid
}