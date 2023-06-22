const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/tin2', (req, res) => {
    res.send('Hello World 2!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})