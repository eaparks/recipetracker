# Recipe Tracker, Saver, Finder, Everythinger


PostgreSql:
if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start
  
  /usr/local/Cellar/postgresql/10.4
  
Setup guide from:
  https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb
  
  
pg_ctl -D /usr/local/var/postgres start && brew services start postgres


## Recipe APIs:
    https://spoonacular.com/food-api


hrecipe (and microformats in general) are the bees knees and lucky for you are widely employed across the web; here's a list of sites actively publishing hrecipes in the wild; you can scrape and parse as you please!
http://www.eat-vegan.rocks/
http://funcook.com/
http://www.therecipedepository.com
http://sabores.sapo.pt/
http://www.epicurious.com/
http://www.williams-sonoma.com/
http://foodnetwork.com/
http://www.plantoeat.com/recipe_book
http://www.essen-und-trinken.de
http://itsripe.com/recipes/
this list was lifted from the hrecipes specification on the microformats wiki ->
http://microformats.org/wiki/hrecipe


TODO - https://developer.edamam.com/edamam-recipe-api
    edEdamamParks/<seeDashlane>
    Recipe Search API:
    application id: 4ed2d625
    application key: 253a7cf6e9e3a77ef162804f395c22e7

Edamam.com sampleQueryResponse.json is a response from this get:
  curl "https://api.edamam.com/search?q=chicken&app_id=4ed2d625&app_key=253a7cf6e9e3a77ef162804f395c22e7&from=0&to=3&calories=591-722&health=alcohol-free"
  
  
=============================
Node Hero lesson 7:

How to organize a Node project:

Don't:
    Imagine, that you have the following directory structure:
    
    // DON'T
    .
    ├── controllers
    |   ├── product.js
    |   └── user.js
    ├── models
    |   ├── product.js
    |   └── user.js
    ├── views
        ├── product.hbs
        └── user.hbs
    
    The problems with this approach are:
        to understand how the product pages work, you have to open up three different directories, with lots of context switching,
        you end up writing long paths when requiring modules: require('../../controllers/user.js')

Do:
    Instead of this, you can structure your Node.js applications around product features / pages / components. It makes understanding a lot easier:
    
    // DO
    .
    ├── product
    |   ├── index.js
    |   ├── product.js
    |   └── product.hbs
    ├── user
    |   ├── index.js
    |   ├── user.js
    |   └── user.hbs

=============================

