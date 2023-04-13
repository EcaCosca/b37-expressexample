require('dotenv').config()
// console.log(process.env)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000

app.get('/', (req, res)=> res.send('GET: Reading something!'));
app.post('/', (req, res)=> res.send('POST: Creating something!'));
app.put('/', (req, res)=> res.send('PUT: Editing something!'));
app.delete('/', (req, res)=> res.send('DELETE: Deleting something!'));

app.get('/here', (req, res)=> res.send("The secret is: "+ process.env.S3_BUCKET));

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`))