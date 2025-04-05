const exp=require('express');
const app =exp();
const mongoose = require('mongoose');
require('dotenv').config();


const userApp=require('./APIs/userAPI')
const adminApp=require('./APIs/adminAPI')
const resourceApp=require('./APIs/resourceAPI')


const cors=require('cors')
app.use(cors())

const port=process.env.PORT || 4000;



// DB connection
mongoose.connect(process.env.DBURL)
.then(()=>{
    app.listen(port,()=> console.log(`server listening on port ${port}... `))
    console.log("DB connection success")

})
.catch(err=>{
    console.log("error in DB connection", err);
})

// body parser middleware
app.use(exp.json()) 

// api routes
app.use('/api/user',userApp)
app.use('/api/admin',adminApp)
app.use('/api/resource',resourceApp)



// error handler
app.use((err,req,res,next)=>{
    console.log("err object in express error handler :",err)
    res.send({message:err.message})
})