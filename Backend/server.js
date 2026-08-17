const express = require('express');
const jwt = require('jsonwebtoken');
const { UserModel } = require('./db.js');
const { default: mongoose } = require('mongoose');


mongoose.connect("");

const JWT_SECRET = "kldjkdl89e3rlkjdfoet";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg : "Hello from Server"
    })
})

app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    res.status(200).json({
        msg : "You are signedup"
    })
})

app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // we will generate jwt token in signin endpoint when once the credentials are verified...
    const token = jwt.sign({
    email : email,
    password : password
    }, JWT_SECRET);

    const verified = jwt.verify(token, JWT_SECRET);

    if (verified) {
        res.json({
            msg : "You are signed in...",
            token : token
        })
    } else {
        res.status(404).json({
            msg : "Wrong Credentials..."
        })
    }
})

app.listen(3000);