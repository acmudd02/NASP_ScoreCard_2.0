const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');
mongoose.connect('mongodb://Sancho:Bigfrog98@ds131099.mlab.com:31099/archer_scores');


var db

//Connected to Mlab as opposed to a local monogo DB
MongoClient.connect('mongodb://Sancho:Bigfrog98@ds131099.mlab.com:31099/archer_scores', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 5000, () => {
    console.log('listening on 5000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('archer_and_score').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {archer_and_score: result})
  })
})

app.post('/archer_and_score', (req, res) => {
  db.collection('archer_and_score').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/archer_and_score', (req, res) => {
  db.collection('archer_and_score')
  .findOneAndUpdate({name: $("#archer_name").val()}, {
    $set: {
      name: req.body.name,
      score: req.body.score
    }
  },  (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/archer_and_score', (req, res) => {
  db.collection('archer_and_score').findOneAndDelete({name: req.body.name}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Your Score was Deleted')
  })
})
