
const usercontroller=require('../controller/userController')
const middlewares=require('../middlewares/validators')
const rolecontoller=require('../controller/rolecontroller')

const routes=(app)=>{
    app.post('/user/signin',usercontroller.getsignin)

    app.post('/user/signup',usercontroller.signuptheuser)

    app.post('/addingrole/touser',middlewares.checkadmin,rolecontoller.addingroletouser)
}

module.exports=routes;