const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/saeng-gi', function (req, res) {
    res.send('<h1>생기</h1>')
  })


  app.get('/cheon-ui', function (req, res) {
    res.json({'천의' : '부당성화한 일 등 일상의 모든 만사가 중화가 되어 새로운 목표를 찬아 움직이며, 갱생하는 시기이다. 또한 궁에 천의가 붙으면 하늘의 은혜를 입어 모든 흉과 액이 물러간다.'})
  })

  app.get('/bog-deog', function (req, res) {
    res.json({'복덕' : '고난 끝에 만물이 결실을 맺는 단계이고, 명칭 그대로 복과 덕을 가져다 주는 생기와 더불어 길성이 강한 일품 지위이다.'})
  })

  app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q)
    const q = req.query
    console.log(q.q)
    console.log(q.name)
    console.log(q.age)
    res.json({'생문' : '활동하고 전진하는 생동의 문으로, 소남의 속성을 가진다'})
  })

  app.get('/palgwae/:name', function (req, res) {
    const {name} = req.params

    if(name == "cheon-ui") {
      res.json({'천의' : '부당성화한 일 등 일상의 모든 만사가 중화가 되어 새로운 목표를 찬아 움직이며, 갱생하는 시기이다. 또한 궁에 천의가 붙으면 하늘의 은혜를 입어 모든 흉과 액이 물러간다.', 'img':'http://'})
    }else if(name == "bog-deog") {
      res.json({'복덕' : '고난 끝에 만물이 결실을 맺는 단계이고, 명칭 그대로 복과 덕을 가져다 주는 생기와 더불어 길성이 강한 일품 지위이다.'})
    }else {
      res.json({'생문' : '활동하고 전진하는 생동의 문으로, 소남의 속성을 가진다'})
    }
    

  })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})