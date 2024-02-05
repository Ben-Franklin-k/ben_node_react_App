const express = require('express')
const cors = require("cors")
const path = require("path")


const app = express()
const port = 4000
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('/api/', (req, res) => {
    return res.status(200).json({
        data: "Express"
    })
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "client/build", "index.html"))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
console.log(path.join(__dirname, '..', "client/build", "index.html"))