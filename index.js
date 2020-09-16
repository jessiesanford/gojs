const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";

// setup directory config
app.use(express.static(__dirname + '/public'));

// setup view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

// app.get("/", (req, res) => {
//     res.render("index", {title: "CRISP"});
// });