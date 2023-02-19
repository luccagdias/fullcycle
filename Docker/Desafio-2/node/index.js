const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    const insert = `INSERT INTO people(name) VALUES ('Some User')`
    const select = `SELECT * FROM people`
    connection.query(insert)
    connection.query(select, function (error, results, fields) {
        res.render('names.ejs', {names: results})
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})