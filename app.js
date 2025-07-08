const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')
const app = express()

const config = require('./utils/config')
const user = require('./controllers/user')
const users = require('./models/users')

mongoose.connect(config.MONGO_URL).then(() => {
  console.log('Conectado a mongo')
}).catch(error => {
  console.log(error)
})

// Motor de vistas para el template engine
app.set('view engine', 'ejs')

// Servimos los archivos estaticos
app.use(express.static('public'))

// Agregamos la rutas de la api
app.use('/api/users', user)

// Manejamos las rutas la pagina
app.get('/', (req, res) => {
  res.render('layout', { option: 'registro', title: 'Registro', users: null })
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
    return res.render('layout', { option: '404', title: 'Not found', users: null })
  }
})

module.exports = app
