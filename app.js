const express = require('express');
const chalk = require('chalk');
const  debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;
app.use(morgan('combined'))
app.get("/", (req, res) => {
    res.send("APL-Shop01");
});

app.listen(port, () => {
   console.log("port: " + chalk.green(port));
   debug("port: " + chalk.green(port));
   
});
