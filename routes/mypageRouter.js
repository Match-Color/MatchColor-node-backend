const express = require('express');

const mypageRouter = express.Router();

mypageRouter.get('/', (req, res) =>{
    res.send('This is "MYPAGE" page');
});

module.exports = mypageRouter;