const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('./database')

// setup 
const app = express()
app.use(bodyParser.json())
app.use(cors())


app.post('/users', (req, res) => {
  database('user').select('*').then(users => res.json(
      { users }
    ))
  //res.json({sucesss: 'you created a user'})
})



// start server 
const port = process.env.PORT || '4000'
app.listen(port, () => console.log(`Listening on ${port}...`))