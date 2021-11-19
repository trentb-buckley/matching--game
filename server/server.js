const express = require("express")
const path = require("path")
const app = express()



app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..public/index.html"))
})
app.use("/css", express.static(path.join(__dirname, "..public/index.css")))
app.use("/js", express.static(path.join(__dirname, "..public/index.js")))
