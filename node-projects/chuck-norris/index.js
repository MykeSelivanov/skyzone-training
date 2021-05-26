// required libs
const express = require('express');
const handlebars = require('express-handlebars');

// app setup
const app = express();
app.use(express.static('public'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// some data
let foods = ['avocado', 'broccoli', 'carrots', 'apple'];
let songs = ['Good 4 U', 'Sweet Melody', 'More Than My Hometown', 'Old Town Road', 'Blinding Lights', 'Rain on Me'];

// routes
app.get('/', (req, res) => {
    let msg = 'hi';
    let errMsg = "<h1>there's been an error</h1>";
    const item1 = foods[0];
    res.render('home', {item1, foods});
});

app.get('/songList', (req, res) => {
    res.render('song_list', {songs});
});


// start server
app.listen(5050, () => {
    console.log('app is running on localhost:/5050');
});