const {book}=require('../models/index')

const getallbook=async(req,res)=>{
    const response=await book.findAll();
    return response
}

const addnewbook=async(data)=>{
    const response=await book.create({
    isbn:data.isbn,
    name:data.name,
    published:data.published,
    
})
return response
}


const getbyname=async(name,data)=>{
    const response=await book.update({
        isbn:data.isbn,
    name:data.name,
    published:data.published},
    { where:{
        name:name
    }
})

    }

const getbyid= async(id)=>{
    const response=await book.destroy({
        where:{
        id:id
    }
})

    }
    


module.exports={
    addnewbook,getallbook,getbyname,getbyid
}