const express = require('express');
const path = require('path');

const app = express(); 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080; 

const assetsPath = path.join(__dirname, "public"); 
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      id: 0
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      id: 1
    }
  ];

app.get('/', (req, res) => {
    console.log({ title: "Mini messageboard", messages: messages });
    res.render("index", { title: "Mini messageboard", messages: messages});
});

app.get('/new', (req, res) => {
    res.render("form")
})

app.get('/message/:id', (req, res) => {
    const messageID = parseInt(req.params.id);
    const message = messages.find(msg => msg.id === messageID);

    if (message) {
        res.render('message', {message: message});
    } else {
        res.status(404).send('message not found');
    }
})

app.post('/new', (req, res) => {
    const userName = req.body.author;
    const message = req.body.message;
    let messageID = messages.length; 

    messages.push({text: message, user: userName, added: new Date(), id: messageID });
    
    res.redirect('/');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));