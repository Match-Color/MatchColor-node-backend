const express = require('express');

const mainRouter = express.Router();

mainRouter.get('/', (req, res) =>{
    res.send('This is main page');
});

module.exports = mainRouter;