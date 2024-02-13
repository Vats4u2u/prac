const express = require('express')
const app = express()
const mongoose = require('mongoose');
// const routes  = require('./route/routes');
var routes = require('./route/routes');


app.listen(9992, function check(err) {
    if (err){
        console.log("Error .....!!!");
    }
    else{
        console.log("started....!!!");
    }
});

//connection of databse
mongoose.connect("mongodb://localhost:27017/abc",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((error) => {
        console.log("Error connecting to the database:", error);
    });

    app.use(express.json());
    app.use(routes);