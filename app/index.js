const fs = require('fs');
const async = require('async');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    response.render('home', {
        name: 'Recipe Vault',
        chowfun: '/recipes/chowfun',
        swedishmeatballs: '/recipes/swedishmeatballs',
    })
});
app.get('/recipes', (request, response) => {
    response.render('home', {
        name: 'Recipe Vault',
        chowfun: '/recipes/chowfun',
        swedishmeatballs: '/recipes/swedishmeatballs',
    })
});

app.get('/recipes/chowfun', (request, response) => {
    fs.readFile('./docs/recipes/chowfun.recipe', function(err, data) {
        response.render('recipes/recipe', { recipetext: data });
    });
});
app.get('/recipes/swedishmeatballs', (request, response) => {
    fs.readFile('./docs/recipes/swedishmeatballs.recipe', function(err, data) {
        response.render('recipes/recipe', { recipetext: data });
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});


// async.map(['./docs/recipes/chowfun.recipe', './docs/recipes/swedishmeatballs.recipe'],
//     fs.stat, function (err, results) {
//     // results is now an array of stats for each file
//         console.log(results);
// });

function showRecipe (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return reject (err)
            }
            resolve(data)
        })
    })
}

Promise.all([
    showRecipe('./docs/recipes/chowfun.recipe'),
    showRecipe('./docs/recipes/swedishmeatballs.recipe')
])
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
