const express = require('express');
const handlebars = require('express-handlebars');

// Instantiating express server
const app = express();


// TODO: Research the difference between using the method on line 11 and 13 because EJS only uses line 12

// Configuring handlebars to use Express

// The defaultLayout is main. Look in /views/layouts/main.handlebars
app.engine('handlebars', handlebars({ defaultLayout : 'main' }));

app.set('view engine', 'handlebars');

// Setting up route to /

app.get('/', (req, res) => {
  res.render('index'); //Index file in /views
})

app.listen(5000, () => {
  console.log('App started on localhost:5000');
})
