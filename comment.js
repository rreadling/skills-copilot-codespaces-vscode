// Create web server
// Create web server
// Require the express module
const express = require('express');
const app = express();
const port = 3000;

// Require the file system module
const fs = require('fs');

// Require the path module
const path = require('path');

// Require the body parser module
const bodyParser = require('body-parser');

// Use the body parser module
app.use(bodyParser.urlencoded({ extended: false }));