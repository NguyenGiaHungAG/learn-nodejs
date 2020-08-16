const express = require('express')
const { response } = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello Hung')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost: ${port}`)
})