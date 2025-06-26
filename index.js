const app = require('./app')
const config = require('./utils/config')

app.listen(config.PORT, (result) => {
  console.log(`Servidor corriendo en la ruta http://localhost:${config.PORT}`)
})
