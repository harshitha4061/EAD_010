const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    roll: 
    {
        type: Number,
        required: true
    },
    branch: 
   {
        type: String,
        required: true
    },
    semester: 
   {
        type: Number,
        required: true
    },
    year:
    {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('student',studentSchema)
