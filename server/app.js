const express = require('express')
const cors = require("cors")

const app = express()
const port = 4000
app.use(cors())

app.get('/api/', (req, res) => {
    return res.status(200).json({
        data: "Express"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})