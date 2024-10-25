const express = require('express')
const router = express.Router()
const Student = require('../models/model')


router.get('/', async(req,res) => 
{
    try
    {
           const student = await Student.find()
           res.json(student)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const student = await Student.findById(req.params.id)
           res.json(student)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const student = new Student
   ({
        name: req.body.name,
        roll: req.body.roll,
        branch: req.body.branch,
        semester: req.body.semester,
        year: req.body.year
    })

    try
   {
        const a1 =  await student.save() 
        res.json(a1)
    }
    catch (err) {
        console.error('Error:', err.message);  // Log the specific error
        res.status(400).send('Error: ' + err.message);  // Send a specific error message
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const student = await Student.findById(req.params.id) 
        student.semester = req.body.semester
        const a1 = await student.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }

})

// console.log(Student.schema.paths);


module.exports = router
