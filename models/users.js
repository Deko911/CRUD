/* const users = [
  {
    name: 'Diego',
    email: 'emaildediego@gmail.com',
    date: '29/02/2026',
    password: 123
  },
  {
    name: 'Oscar',
    email: 'emaildeoscar@gmail.com',
    date: '29/02/2026',
    password: 456
  }
] */

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Debe ingresar el nombre'],
    minLength: [3, 'El nombre debe tener al menos 3 caracteres']
  },
  email: {
    type: String,
    required: [true, 'Debe ingresar el correo'],
    match: [/^\w+@\w+.\w+$/, 'Correo invalido']
  },
  date: {
    type: Date,
    default: Date.now/* function () {
      const now = new Date()
      console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`, now.getDate(), now.getMonth() + 1, now.getFullYear())
      return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
    } */
  },
  password: {
    type: String,
    required: [true, 'Debe ingresar la contraseña'],
    minLength: [3, 'La contraseña debe tener al menos 3 caracteres']
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
