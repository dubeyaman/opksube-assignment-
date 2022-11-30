const booKcontroller=require('../controller/controllers');

const routes=(app)=>{
    app.get('/book/listgetallbook',booKcontroller.getallbook);

    app.post('/book/create/addnewbook',booKcontroller.addnewbook);

    app.put('/book/getbyname/name',booKcontroller.getbyname)

    app.delete('/book/getbyname/:id',booKcontroller.getbyid)
}
module.exports=routes;