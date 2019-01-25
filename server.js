const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

const userRouter = require('./routes/user');
const companyRouter = require('./routes/company');


//DB Config
const db = require('./config/keys').MongoURI;

//Mongo DB
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Mongo DB Connected");
}).catch((err) => {
    console.log(err);
});

//BodyParser
app.use(express.urlencoded({
    extended: true
}));


app.use('/', userRouter);
app.use('/', companyRouter);


const port = 5000;

app.listen(port, () => {
    console.log(`The server is running on ${port} port`);
});

module.exports = router;