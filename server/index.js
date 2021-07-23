const express = require("express");

const bodyParser = require('body-parser')

const db = require('./pg/queries.js')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
