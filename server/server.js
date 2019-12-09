const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(body.json());
app.use(express.static(`${__dirname}/../public`));
app.use(bodyparser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  console.log('hello world');
});

app.listen(PORT, () => {
  console.log(`Connection Success! Listening on port ${PORT}!`);
});
