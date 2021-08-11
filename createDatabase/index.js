const express = require('express');
const User = require("./models/UserModel");
const bcrypt = require('bcrypt');
const saltRounds = 15;
const csv = require('csv-parser')
const fs = require('fs')
const app = express();
app.use(express.static('public'))
const port = 3000;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("Go to /start");
});

app.get('/start', (req, res) => {
    let results = [];
    fs.createReadStream('./public/users2.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            let data = [];

            mongoose.connect('mongodb://localhost:27017/SecureTriviaDB', {
                useNewUrlParser: true,
            });

            const db = mongoose.connection;
            db.once("open", function () {
                console.log("MongoDB database connection established successfully");
            });
            db.on('error', console.error.bind(console, 'connection error:'));
            results.forEach(ele => {
                bcrypt.hash(ele["password"], saltRounds).then(function async(hash) {
                    let newUser = new User({
                        firstName: ele["fname"],
                        lastName: ele["lname"],
                        street: ele["street"],
                        city: ele["city"],
                        state: ele["state"],
                        zip_code: ele["zip_code"],
                        phone: ele["phone"],
                        email: ele["email"],
                        password: hash,
                        isAdmin: false
                    });

                    newUser.save().then(() => {
                        console.log("Created");
                    });
                    //ele["fname"], ele["lname"], ele["street"], ele["city"], ele["state"], ele["zip_code"], ele["email"], password, ele["phone"];
                });
            });
            res.send("End");
        });



});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});