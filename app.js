const express = require('express');
const path = require('path');

const app = express(); 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080; 

const assetsPath = path.join(__dirname, "public"); 
app.use(express.static(assetsPath));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));