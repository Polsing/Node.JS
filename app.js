const express = require('express');
const morgan = require('morgan');

const  app = express();
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');
const User = require("./data/data.json");
//require("./src/js/aret");
const PORT = 5000;

const productRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"./public/")));
app.use(express.static(path.join(__dirname,"./src/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.use("/product",productRouter);
productRouter.route("/").get((req,res)=>{
    res.render("products",{User,});
});
productRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("product",{
        product: User[id],
    })
})

app.get("/Register",(req,res)=>{
    res.render("Register");
})


app.listen(PORT, ()=>{
    debug('port: ' + chalk.green(PORT) + ' ON');
})