const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const mustache = require("mustache-express");
app.engine("mustache", mustache());
app.set("view engine", "mustache");

app.use(express.urlencoded({extended: false })); //parses urlencoded bodies and only looks at requests where content type header matches the type option
app.use(express.static(path.join(__dirname, '/public'))); // serves static files in express

app.use(function(req, res) {
    res.status(404)
    res.send("Not found");
});

const router = require('./routes/unauthenticated/restaurantRoutes');
app.use('/', router); 
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}`
  )
);