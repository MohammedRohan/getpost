const register = require('./route/db')
const express = require('express');
const bodyParser = require('body-parser');
var app = new express()
const cors = require("cors");
app.use(cors({
    origin:"*"
}));
app.get('/', (req, res) => {

    res.send('hello')

})

app.post("/post",(req,res)=>{
console.log("enter")
    var demo = {
        name: req.body
    }
var demo1 = register(demo)
demo1.save()
})
app.listen(process.env.PORT || 2222)