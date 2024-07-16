import { createClient } from "redis";
const client = createClient();

async function processSubmission(submission: string) {
 const {problemId, code, language, testcases} = JSON.parse(submission)
 console.log(`Processing submission for problemId ${problemId}...`);
 console.log(`Code: ${code}`);
 console.log(`Language: ${language}`);
 await new Promise((time) => setTimeout(()=>1000));
 console.log(`Finished processing submission for problemId ${problemId}.`);
}

async function startServer() {
    await client.connect();
    console.log("Worker connected")
}

