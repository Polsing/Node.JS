const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const User = require("./data/data.json");
const  app = express();
const productRouter = express.Router();
const PORT = 5000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"./public/")));
app.set("views","./src/views");
app.set("view engine","ejs");

productRouter.route("/").get((req,res)=>{
    res.render("products",{User,});
});

productRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("product",{
        product: User[id],
    })
})

app.use("/product",productRouter)


app.get("/Login",(req,res)=>{
    res.render("index",{email: '@email',pass: 'password'});
   
})

app.listen(PORT, ()=>{
    debug('port: ' + chalk.green(PORT) + ' ON');
})