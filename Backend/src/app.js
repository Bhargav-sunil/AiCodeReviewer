const express = require("express")
const aiRoutes = require('./routes/aiRoutes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).json({message:"Test route created successfully"})
})

app.use('/ai',aiRoutes)

module.exports = app