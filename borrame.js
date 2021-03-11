const express = require('express');
const app = express();

app.use('/user/:id', function(req, res, next){
  console.log('Request URL', req.originalUrl);
  next
}, function(req, res, next){
  console.log('Request Type:', req.method);
  next();
})

app.listen(3000, function(){
  console.log('listening in htto://localhost:3000')
})
