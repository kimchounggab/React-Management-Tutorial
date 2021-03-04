const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customer', (req,res) => {
  res.send([ {
    "id": 1,
    "image": "https://placeimg.com/100/100/1",
    "name": "홍길동",
    "birthday": "961222",
    "gender": "남자",
    "job": "대학생"
  },
  {
    "id": 2,
    "image": "https://placeimg.com/100/100/2",
    "name": "손오공",
    "birthday": "961223",
    "gender": "남자",
    "job": "쇼맨"
  },
  {
    "id": 3,
    "image": "https://placeimg.com/100/100/3",
    "name": "베트맨",
    "birthday": "961224",
    "gender": "남자",
    "job": "정의맨 "
  }
  ]);
});
app.listen(port, () => console.log(`Listening on port ${port}`));