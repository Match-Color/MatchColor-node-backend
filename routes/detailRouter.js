const express = require('express');
const Color = require('../models/color');

const detailRouter = express.Router();

detailRouter.get('/', (req, res) =>{
    res.send('This is DETAIL page');
});

module.exports = detailRouter;