// import modules
const express = require('express');

// creating app/server
const app = express();

// use the port from provided environment, in case it's undefined, run the app on 3000
const PORT = process.env.PORT || 3000;


// listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});