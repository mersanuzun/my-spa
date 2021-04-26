const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'frontend', 'static')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
