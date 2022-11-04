const express = require('express')

const app = express(); //express 모듈을 실행해서 app 변수에 할당
app.set('port', process.env.Port || 3000);


const mainRouter = require('./routes/main.js');
const uploadRouter = require('./routes/upload.js');
const mypageRouter = require('./routes/mypage.js');
const detailRouter = require('./routes/detail.js')

// app.get('/', (req, res) => {
//     res.send('Hello, Express');
// })

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기 중')
})

app.use('/', mainRouter);
app.use('/upload', uploadRouter);
app.use('/mypage', mypageRouter);
app.use('/detail', detailRouter);