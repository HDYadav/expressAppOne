var express = require("express");

app = express();

app.get('', function (req, res) {
    res.send("Hello Express Js Web")
})

app.listen(8000, function () {
    console.log("express console");
    
})