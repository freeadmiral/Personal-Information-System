const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const keys = require('./config/keys');
const verifyToken = require('./middleware/verifyToken');
const cors = require("cors");

const userRouter = require('./routes/user');
const companyRouter = require('./routes/company');
const accountRouter = require('./routes/account');


// Cors
app.use(cors());

//DB Config
const db = keys.MongoURI;
app.set('api_secret_key', keys.api_secret_key);

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

//Middleware
app.use('/api', verifyToken);


app.use('/', userRouter);
app.use('/', companyRouter);
app.use('/account', accountRouter);


const port = 5000;

app.listen(port, () => {
    console.log(`The server is running on ${port} port`);
});

module.exports = router;