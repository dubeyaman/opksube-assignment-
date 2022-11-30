const bookroutes=require('./routes/bookRoutes')
const userRoutes=require('./routes/userRoutes')
const {book, sequelize,role}=require('./models/index')
const bodyParser=require('body-parser');
const express=require('express')


const app=express()
app.use(bodyParser.urlencoded({extended:true}));
bookroutes(app);
userRoutes(app)
const port=3200;

//npm start



app.listen(port,async()=>{
    await sequelize.sync();
    console.log('server is running on port',port)
})