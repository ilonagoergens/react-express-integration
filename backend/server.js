import express from "express"
import fs from "fs"
import cors from "cors"



const app = express()
app.use(express.json());
app.use(cors())
const PORT = 3000

app.get("/api/v1/users", (req, res) => {
    const data = fs.readFileSync("data.json")
    res.header("Content-Type", "application/json");
    res.send(data)
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))