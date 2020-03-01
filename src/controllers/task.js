const { getConnection } = require('../database');
const {v4} = require('uuid');

const getTasks = (req, res) => {
    const tasks = getConnection().get('tasks').value();
    res.json(tasks);
}

const createTask = (req, res) => {

    const newTask = {
        id: v4(),
        name: req.body.name,
        description: req.body.description
    };
    
    getConnection().get('tasks')
    .push(newTask)
    .write();

    res.send('task created');
}

const getTask = (req, res) => {
    id = req.params.id;

    const task = getConnection().get('tasks')
    .find({id: id})
    .value();
    
    res.json(task);
}

const updateTask = async (req, res) => {
    id = req.params.id;

    const result = await getConnection().get('tasks')
    .find({id: id})
    .assign(req.body)
    .write();

    res.json({
        message: 'task updated successfully',
        task: result
    });
}

const deleteTask = (req, res) => {
    id = req.params.id;

    getConnection().get('tasks')
    .remove({id: id})
    .write()

    res.json({
        message: 'Deleted successfully'
    });
}

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}