require('dotenv').config()
// console.log(process.env)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const path = require('path')

app.set('view engine', 'pug')

// STAGE 1
// app.get('/', (req, res)=> res.send('GET: Reading something!'));
// app.post('/', (req, res)=> res.send('POST: Creating something!'));
// app.put('/', (req, res)=> res.send('PUT: Editing something!'));
// app.delete('/', (req, res)=> res.send('DELETE: Deleting something!'));

// STAGE 2 - ROUTING
app.route('/') 
    .get((req, res)=> res.send('GET: Reading something!'))
    .post((req, res)=> res.send('POST: Creating something!'))
    .put((req, res)=> res.send('PUT: Editing something!'))
    .delete((req, res)=> res.send('DELETE: Deleting something!'));
    
app.get('/here', (req, res)=> res.send("The secret is: "+ process.env.S3_BUCKET));

// JSON DATA EXAMPLE
app.get('/data', (req, res)=>{
    const data = {
        name: "Paco",
        age: 22,
        email: "paco@tio.com"
    }

    res.json(data)
})

// REDIRECT
app.get('/redirect', (req, res)=>{
    console.log("you are being redirected")
    res.redirect('/data')
})

// Get elements from URL

app.get('/users/:id', (req, res)=>{
    console.log(req.params.id)
    console.log(req.query.sort)
    res.send("Check your console")
})

// RENDERING VIEWS WITH PUG
app.get('/pug/:name', (req, res) => {
    res.render('index', { title: 'Hey', message: `Hello there ${req.params.name}!` })
  })

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`))