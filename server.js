const express = require("express");
const path = require("path");

const app = express();

//static 마운트 지정
app.use(express.static(path.join(__dirname, "frontend/static")));

//get요청시 index.html 접속
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/index.html"));
});

//포트번호 3000 지정 및 서버 실행
app.listen(process.env.PORT || 5500, () => console.log("Server running!"));
