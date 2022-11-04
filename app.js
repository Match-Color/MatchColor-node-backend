const express = require('express')
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");

const app = express(); //express 모듈을 실행해서 app 변수에 할당
app.set('port', process.env.Port || 3000);

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

app.use('/', indexRouter);


app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기 중')
})

module.exports = app;