const express = require('express')

// express 인스턴스 생성
const app = express()

app.get('/', function (req, res) {
  res.send('API root test! !')
})

app.get('/testapi', (req, res) => {
  res.send('this is test api ! hello world :)')
})

module.exports = {
  path: '/api',
  handler: app
}
