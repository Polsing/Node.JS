const express = require('express');
const chalk = require('chalk');
const  debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req, res) => {
    res.send("APL-Shop01");
});

app.listen(port, () => {
   console.log("port: " + chalk.green(port));
   debug("port: " + chalk.green(port));
   
});
