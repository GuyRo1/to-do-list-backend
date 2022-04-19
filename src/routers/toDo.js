const express = require('express')
const ToDo = require('../models/toDoList')

const router = new express.Router()

router.get('', async (req, res, next) => {
    try {
        const toDoList = await ToDo.find()
        const returnList = []
        toDoList.forEach(item => {
            returnList.push({
                id: item._id,
                completed: item.completed,
                content: item.task
            })
        })
        res.send({ toDoList: returnList })
    } catch (err) {

    }
})

router.put('', async (req, res, next) => {
    try {
        const toDo = new ToDo()
        toDo.completed = false
        toDo.task = req.body.task
        await toDo.save()
        res.send({ id: toDo._id })
    } catch (err) {

    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await ToDo.findOneAndDelete({ _id: req.params.id })
        res.send({ message: "deleted" })
    } catch (err) {

    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const toDo = await ToDo.findOne({ _id: req.params.id })
        toDo.completed = req.body.completed
        await toDo.save()
        res.send({ message: "succeeded" })
    } catch (err) {

    }
})

module.exports = router

