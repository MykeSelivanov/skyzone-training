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

// routes
app.get('/', (req, res) => {
    let msg = 'hi';
    const item1 = foods[0];
    res.render('home', {item1, foods});
});


// start server
app.listen(5050, () => {
    console.log('app is running on localhost:/5050');
})