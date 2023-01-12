const express = require('express')
const app = express()
const port = process.env.PORT || 3500
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send('Hello from api!')
})

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
})