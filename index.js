const express = require('express');
const connection = require('./connection');
const taskRoute = require('./routes/tasks');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/', taskRoute);
module.exports = app;