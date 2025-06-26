const express = require('express')
const users = require('../models/users')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  res.json(users)
})

router.post('/', (req, res) => {
  res.send(req.body)
})

router.post('/register', (req, res) => {})

router.post('/login', (req, res) => {
  res.json('Entrando...')
})

router.post('/logout', (req, res) => {})

module.exports = router
