const express = require('express')
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.urlencoded({extended : false})) ;

app.use('/add-product' , (req,res,next) =>{
    res.send('<form action = "/product" method = "POST"> <input type = "text" name = "title"><input type = "text" name = "size"> <button type = "submit" >Add a product </button></form>')
})

app.use('/product' , (req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
})

app.listen(3000);
