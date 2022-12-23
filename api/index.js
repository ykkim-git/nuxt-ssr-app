const express = require('express')

// express 인스턴스 생성
const app = express()

// 실제로는 /api 라우트를 처리하는 메소드가 된다.
app.get('/', function(req, res) {
  res.send('API root test! !')
})

module.exports = {
  path: '/api',
  handler: app
}