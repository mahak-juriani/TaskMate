// api/index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('../config/db');
require('dotenv').config();

const app = express();
connectDB();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use(bodyParser.json());
app.use('/auth', require('../routes/authRoutes'));
app.use('/tasks', require('../routes/taskRoutes'));
app.use('/admin', require('../routes/adminRoutes'));

module.exports = app;
