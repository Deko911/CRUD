const express = require('express')
const User = require('../models/users')
const router = express.Router()

router.use(express.json())

router.get('/', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

router.post('/', async (req, res) => {
  const user = new User({ ...req.body })
  const result = await user.save()
  res.json(result)
})

router.post('/register', (req, res) => {})

router.post('/login', (req, res) => {
  res.json('Entrando...')
})

router.post('/logout', (req, res) => {})

module.exports = router
