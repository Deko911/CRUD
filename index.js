const express = require('express')
const app = express()

const fs = require('fs');

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("layout", {option: "registro", title: "Registro"})
})

app.get('/:option', (req, res) => {
    const option = req.params.option

    const title = option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()

    if (fs.existsSync(`views/pages/${option}.ejs`)) {
        res.render("layout", {option: option, title: title})
    }else{
        res.status(404)
        return res.render("layout", {option: "404", title: "Not found"})
    }
}) 

app.listen(8000, (result) => {
    console.log("Servidor corriendo en la ruta http://localhost:8000")
})