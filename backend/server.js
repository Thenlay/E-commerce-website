const express = require("express");
const cors = require('cors');
const data = require('./data.js');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userrouter = require("./routers/userRouter.js");
app.use(cors());

mongoose.connect("mongodb+srv://tsering:Tongspon@dep.uewq1ll.mongodb.net/minorProjectThinley?retryWrites=true&w=majority").then(()=>
console.log("mongodb connected"))
.catch((err)=>{
  console.log(err.reason);
});
// app.user(bodyParser.json());
// app.use('/api/users' , userrouter);

app.get("/api/products", (req,res) => {
res.send(data.products);
});

app.get('/api/products/:id', (req,res) =>{
  const product = data.products.find((x) => x._id === req.params.id);
  if(product) {
    res.send(product);
  } else{
    res.status(404).send({message: 'Product Not Found!'});
  }
});
app.use((err, req, res, next) =>{
  const status = err.name && err.name === 'ValidationError'? 400:500;
  res.status(status).send({message: err.message});
});

app.listen(5001, ()=>{
    console.log('serve at http://localhost:5001');
});