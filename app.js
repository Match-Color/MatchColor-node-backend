const express = require('express')

const app = express(); //express 모듈을 실행해서 app 변수에 할당
app.set('port', process.env.Port || 3000);


const mainRouter = require('./routes/main.js');
const uploadRouter = require('./routes/upload.js');
const mypageRouter = require('./routes/mypage.js');
const detailRouter = require('./routes/detail.js')

const mongoose = require("mongoose");

// app.get('/', (req, res) => {
//     res.send('Hello, Express');
// })


// mongoDB 연결
mongoose
  .connect(process.env.mongoURI, {
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  // 루트 디렉토리에 라우트
  res.send("mongoDB 연결 완료"); // 출력
});



app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기 중')
})

app.use('/', mainRouter);
app.use('/upload', uploadRouter);
app.use('/mypage', mypageRouter);
app.use('/detail', detailRouter);