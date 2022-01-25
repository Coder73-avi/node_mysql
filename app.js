require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// for routing

app.use(express.json());


app.listen(port,()=>{
  console.log(`Server connected with port ${port}`);
})
