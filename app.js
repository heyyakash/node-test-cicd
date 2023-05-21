const express = require("express")
const app = express()


let name = "Akash"
let password = "Sharma"

app.use(express.json())

app.get("/", async (req, res) => {
    res.sendStatus(200)
})

app.post("/user", async (req, res) => {
    console.log(req.body)
    const { name: username, password: userPassword } = req.body
    if (!username || !userPassword) return res.status(400).json({ msg: "Enter credentials", success: false })
    if (username === name && userPassword === password) return res.status(200).json({ msg: "Hello Master", success: true })
    res.status(400).json({ msg: "Who tf r u?", success: false })
})



module.exports = app