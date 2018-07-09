const fs = require('fs');
const async = require('async');


// async.map(['./docs/recipes/chowfun.recipe', './docs/recipes/swedishmeatballs.recipe'],
//     fs.stat, function (err, results) {
//     // results is now an array of stats for each file
//         console.log(results);
// });


function showRecipe (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
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
