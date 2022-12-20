const express = require('express');
const detailRouter = express.Router();
const etri = require("../services/extractColor");
const imageFilePath = './test1.jpg';
detailRouter.get('/', (req, res) =>{
  //res.send(etri('jpg', imageFilePath));
  res.send('detail page');
});

module.exports = detailRouter;