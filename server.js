// require express
const express = require('express');
// require path for directory linking
const path = require('path');
// require animals data
const animals = require('./data/animals-db');

// create express app
const app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// simple route
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

// animals index
app.get('/animals', (req, res) => {
    res.render('animals/index', {
        animals: animals.getAnimals()
    })
})

// animal show
app.get('/animals/:id', (req, res) => {
    const animal = animals.getAnimal(req.params.id);
    res.render('animals/show', {
        animal
    })
})

// listen
app.listen(3000, () => {
    console.log("Listening on port 3000");
})
