const express = require('express');

const uploadRouter = express.Router();

uploadRouter.get('/', (req,res) =>{
    res.send('This is upload page');
});

module.exports = uploadRouter;