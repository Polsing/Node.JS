const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const  app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"public/")));

app.get("/",(req,res)=>{
    res.send("APL-shop");
})

app.listen(PORT, ()=>{
    debug('port: ' + chalk.green(PORT) + ' ON');
})