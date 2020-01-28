const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.static(path.join(__dirname, "public")))
app.use(cors());







const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})