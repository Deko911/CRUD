const express = require('express')
const app = express()

const fs = require('fs')
const user = require('./controllers/user')
const users = require('./models/users')
const config = require('./utils/config')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/api/users', user)

app.get('/', (req, res) => {
  res.render('layout', { option: 'registro', title: 'Registro' })
})

app.get('/:option', (req, res) => {
  const option = req.params.option

  const title = option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()

  let Dusers = null

  if (fs.existsSync(`views/pages/${option}.ejs`)) {
    if (option.toLowerCase() === 'inicio') {
      Dusers = users
    }
    res.render('layout', { option, title, users: Dusers })
  } else {
    res.status(404)
    return res.render('layout', { option: '404', title: 'Not found' })
  }
})

app.listen(config.PORT, (result) => {
  console.log(`Servidor corriendo en la ruta http://localhost:${config.PORT}`)
})
