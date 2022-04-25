const express = require('express');

const app = express();

app.use(function(req, res) {
    res.status(404)
    res.send("Not found");
});

app.listen(3000, () => {
    console.log("App server running on port 3000");
});