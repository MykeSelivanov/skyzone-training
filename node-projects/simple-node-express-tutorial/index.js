// import modules
const express = require('express');
// const path = require('path');
const studentsRoutes = require('./routes/students.js');

// creating app/server
const app = express();

// middleware
const timeLog = (req, res, next) => {
    console.log(`Request hit at:  ${Date.now()}`);
    next();
};

const timeLog2 = (req, res, next) => {
    console.log(`Request was done at: ${Date.now()}`);
    // always call next in your middlewares
    next();
};

// this middleware will be applied to all routes
app.use(timeLog);
// app.use(timeLog2);

// index route
app.get('/', timeLog2, (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

// students routes
app.use("/api/students", studentsRoutes);

// use the port from provided environment, in case it's undefined, run the app on 3000
const PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});