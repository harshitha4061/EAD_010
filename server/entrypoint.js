const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const studentRouter = require('./routes/controller')


const url = 'mongodb://localhost:27017/student';
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(express.json())

app.use('/',studentRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
