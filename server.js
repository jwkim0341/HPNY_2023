const express = require('express');
const path = require('path');

const app = express();

// //static 마운트 지정
// app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

// //get요청시 index.html 접속
// app.get('/*', (req, res) => {
//   console.log(123);
//   // res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
// });

// //포트번호 3000 지정 및 서버 실행
// app.listen(process.env.PORT || 5500, () => console.log('Server running!'));
app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req, res) => {
  console.log(req);
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Server running...'));
