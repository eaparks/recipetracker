const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.use((request, response, next) => {
    console.log(request.headers);
    next();
});

app.use((request, response, next) => {
    request.chance = Math.random();
    next()
});

app.use((err, request, response, next) => {
    // log the error, for now just console.log
    console.log(err);
    response.status(500).send('Something broke!')
});

app.get('/', (request, response) => {
    response.render('home', {
        name: 'Edward Allen'
    })
});

app.get('/chance', (request, response) => {
    response.json({
        chance: request.chance
    })
});

app.get('/x', (request, response) => {
    response.send('Hello from Express and Edward!')
});

app.get('/recipes/chowfun', (request, response) => {
    response.send('Hello from chowfun recipe!')
});
app.get('/recipes/swedishmeatballs', (request, response) => {
    response.send('Hello from swedishmeatballs recipe!')
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});