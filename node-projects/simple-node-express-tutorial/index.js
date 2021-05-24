// import modules
const express = require('express');

// creating app/server
const app = express();

// port
const PORT = 3000;
console.log(process.env);

// listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});