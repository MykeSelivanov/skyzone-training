const express = require('express');
const students = require('../database.js');
const router = express.Router();

router.get("/", (req, res) => {
    // send all students
    res.json(students);
});

router.get("/:id", (req, res) => {
    // retrieve params data
    const paramId = req.params.id;
    // const queryId = req.query.id;
    const isFound = students.some((student) => student.id === Number.parseInt(paramId));
    if(isFound) {
        const student = students.filter((student) => student.id === Number.parseInt(paramId));
        res.status(200).send(student);
    } else {
        res.status(404).json(`Student with id of ${paramId} not found`);
    }
});

module.exports = router;