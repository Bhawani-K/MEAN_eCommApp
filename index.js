const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDB = require('./db')

const app = express();

// MiddleWare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Initialize the connection to Db
connectToDB();

module.exports = app;