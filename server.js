const express = require('express');
const handlebars = require('express-handlebars');

// Instantiating express server
const app = express();


// TODO: Research the difference between using the method on line 11 and 13 because EJS only uses line 12

// Configuring handlebars to use Express
app.engine('handlebars', handlebars({ defaultLayout : main }));

app.set('view engine', 'handlebars');


