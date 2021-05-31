// import modules
const express = require('express');
const path = require('path');

// creating app/server
const app = express();
const students = [
    {
        id: 1,
        name: "Max"
    },
    {
        id: 2,
        name: "Peter"
    },
    {
        id: 3,
        name: "Mike"
    },
    {
        id: 4,
        name: "Umar"
    },
];

// getting directory path
// console.log(path.join(__dirname, "public"));

// routes
app.get('/', (req, res) => {
    // res.send("<h1>Hello World</h1>");
    // res.sendFile(__dirname + "/public/" + "index.html");
    res.json(students);
});

app.get("/api/students", (req, res) => {
    // send all students

    console.log(`req`, req);
    res.json(students);
});

app.get("/api/students/:id", (req, res) => {
    // retrieve params data
    
    const id = req.params.id;
    console.log(id);
    
    console.log(req.params.id);
    res.send("Your id is: ", res.params.id);
});

// use the port from provided environment, in case it's undefined, run the app on 3000
const PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});