const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require('./keys')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

mongoose
    .connect(mongoURI, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log("Mondodb Connected...."))
    .catch(err => console.error(err));

//use mode //model register 

require('./models/user')

// Use routes // route register

app.use('/', require('./router/crud'))

app.get("/", (req, res) => {
    res.send("Server working");
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));