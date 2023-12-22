const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const  app = express();
const port = 5000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"public/")));


app.listen(port, ()=>{
    debug('port: ' + chalk.green(port) + ' ON');
})