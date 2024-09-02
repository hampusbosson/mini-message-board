const express = require('express');
const path = require('path');

const app = express(); 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080; 

const assetsPath = path.join(__dirname, "public"); 
app.use(express.static(assetsPath));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.get('/', (req, res) => {
    console.log({ title: "Mini messageboard", messages: messages });
    res.render("index", { title: "Mini messageboard", messages: messages});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));