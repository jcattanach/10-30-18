const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
var bodyParser = require('body-parser')
const port = 3000

vacationPosts = []

app.engine('mustache',mustacheExpress())

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine','mustache')

app.listen(port, () => console.log(`Server is running...`))

app.get('/', (req, res) => res.send('Hello World!'))

app.set('views','./views')


app.post('/add-vacation',function(req,res){

  let cityName = req.body.cityName
  let imgURL = req.body.imgURL
  let dateDeparture = req.body.dateDeparture
  let dateReturn = req.body.dateReturn

  vacationPosts.push({cityName : cityName, imgURL : imgURL, dateDeparture : dateDeparture, dateReturn : dateReturn})

  res.redirect('/vacation')
})
app.get('/add-vacation', function(req,res){
  res.render('add-vacation')
})

app.get('/vacation', function(req,res){

  res.render('vacation', { vacationPostsElement : vacationPosts})
})
