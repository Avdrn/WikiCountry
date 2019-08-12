const express      = require('express');
var app = express();
var cors = require('cors')
app.use(cors())



app.get('/countries', (req, res, next) => {
  const countries = require("../client/src/components/countries.json")
  res.json(countries);
});

app.listen(3000, () => {
  console.log("Port is listening")
});