const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/saeng-gi', function (req, res) {
    res.send('<h1>생기</h1>')
  })


  app.get('/cheon-ui', function (req, res) {
    res.send('천의')
  })

  app.get('/bog-deog', function (req, res) {
    res.send('복덕')
  })

  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})