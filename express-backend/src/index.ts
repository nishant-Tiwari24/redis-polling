import express from 'express'
import { createClient } from 'redis'

const app = express();
app.use(express.json())

const client = createClient();

app.post('/submit', async (req, res) => {
    const {problemId, code, language, testcases} = req.body

    try {
        await client.lPush("problems", JSON.stringify({problemId, code, language, testcases}))
        res.status(200).send("Submission recieved");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
})

async function startserver () {
    try {
        await client.connect();
        console.log("Client connected");
    }
    catch {
        console.log("Client connection failed")
    }
}

startserver();