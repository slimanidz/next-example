const express = require("express")
const cors = require("cors")
const getResources = require("./db/getResources")
const createResource = require("./db/createResource")

const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())

app.post("/posts", async (req, res) => {
    const {title, content} = req.body
    const post = await createResource("posts", {title, content})
    
    res.send(post)
})

app.get("/posts", async (req, res) => {
  res.send(await getResources("posts"))
})

app.get("/posts/:postId", async (req, res) => {})
app.put("/posts/:postId", async (req, res) => {})
app.patch("/posts/:postId", async (req, res) => {})
app.delete("/posts/:postId", async (req, res) => {})

app.listen(PORT, () => console.log(`Listening on :${PORT}`))
