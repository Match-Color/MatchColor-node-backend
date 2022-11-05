const express = require('express')
const connect = require('./models/index');
const indexRouter = require("./routes/index");
require('dotenv').config();

const app = express(); //express 모듈을 실행해서 app 변수에 할당
app.set('port', process.env.PORT || 3000);

// 몽고디비 연결
connect();

// 라우터 연결
app.use('/', indexRouter);

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기 중')
})

module.exports = app;