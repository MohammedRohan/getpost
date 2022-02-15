const register = require('./route/db')
const express = require('express');
const bodyParser = require('body-parser');
var app = new express()
const cors = require("cors");
app.use(bodyParser.json())
app.get('/', (req, res) => {

    res.send('hello')

})

app.post("/post",async(req,res)=>{
console.log("enter")
    var demo = new register({
        name: req.body.name
    })
// var demo1 = register(demo)
try{
    const a1 =  await demo.save() 
    res.json(a1)
}catch(err){
    res.send('Error')
}
})
app.get('/data', async(req,res) => {
    try{
           const aliens = await register.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

app.listen(process.env.PORT || 2222)