const express = require('express');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({
    path: './config/secret.env'
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_UserName,
    password: process.env.DB_Password,
    database: 'nodejs'
})

connection.connect((err) => {

    if (err) {
        console.log("error in the databse connection");
    } else {
        console.log("database connected successfully");
    }
})

app.use(express.json());

////simple get request
const appController = require('./router/app');
appController(connection, app);


module.exports = { app, connection };