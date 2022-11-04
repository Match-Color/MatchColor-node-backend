const express = require('express');

const detailRouter = express.Router();

detailRouter.get('/', (req, res) =>{
    res.send('This is "DETAIL(recommend color)" page');
});

module.exports = detailRouter;