const express = require('express');
// var cors = require('cors')
const app = express();

app.use(express.urlencoded({extended: false }));
// app.use(cors())

const path = require('path');
const public = path.join(__dirname,'public');
app.use(express.static(public));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes');
app.use('/', router); 

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(
    `Application started on http://localhost:${port}`
  )
);
