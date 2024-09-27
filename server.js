// load express module
const express = require("express");
const port = 3300;


//create webapp
const app = express();

app.get('/', (req, res) => {
  // create response
  res.send(`Hello from ${port}`);
});

app.listen(port, ()=>{
  console.log(`Server serving at ${port}\n`);
});
