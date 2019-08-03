const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('../models/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/cc-testDB", {
    useNewUrlParser: true
  });
  

app.listen(7000, () => {
    console.log('Test server is now running')
});