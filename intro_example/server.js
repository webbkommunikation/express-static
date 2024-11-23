const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/greeting", (req, res) => {
    res.json({ "message": "Hello from the API!" })
})

app.listen(3000, () => {
    console.log("Server is running.")
})