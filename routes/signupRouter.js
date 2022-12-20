const express = require('express');

const signupRouter = express.Router();

signupRouter.get('/', (req, res) =>{
  res.send('This is signup page');
});

module.exports = signupRouter;