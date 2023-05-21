const express=require("express")
const MongoConnection=require("./db")
MongoConnection()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.send('Home')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})