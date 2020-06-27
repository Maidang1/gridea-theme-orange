const express = require('express')
const ejs = require('ejs')
const path = require('path')
const axios = require('axios')

const app = express()

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');

/**
 * Home Page & Post List Page
 */
app.get('/', async (req, res) => {
  const response = await axios.get('http://localhost:8080//list.json')
  res.render('index', { ...response.data })
})

/**
 * Post Page
 */
app.get('/post/:postName', async (req, res) => {
  const response = await axios.get('http://localhost:8080//post.json')
  res.render('post', { ...response.data })
})

/**
 * Archives Page
 */
app.get('/archives', async (req, res) => {
  const response = await axios.get('http://localhost:8080//archives.json')
  res.render('archives', { ...response.data })
})

/**
 * tags Page
 */
app.get('/tags', async (req, res) => {
  const response = await axios.get('http://localhost:8080//tags.json')
  res.render('tags', { ...response.data })
})

/**
 * tag Page
 */
app.get('/tag/:tagName', async (req, res) => {
  const response = await axios.get('http://localhost:8080//tag.json')
  res.render('tag', { ...response.data })
})

//使用8080端口
app.listen(3001)
console.log("The server is running on 3001")
