const express = require('express');

const loginRouter = express.Router();

loginRouter.get('/', (req, res) =>{
  res.send('This is login page');
});

module.exports = loginRouter;