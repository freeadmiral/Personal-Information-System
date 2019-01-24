const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB Config
const db = require('./config/keys').MongoURI;

//Mongo DB
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log("Mongo DB Connected");
}).catch((err) => {
    console.log(err);
})

//BodyParser
app.use(express.urlencoded({
    extended: true
}));

const port = 5000;

app.listen(port, () => {
    console.log(`The server is running on ${port} port`);
});

const customer = function getCustomers() {
    return customers;
}

module.exports = customer;