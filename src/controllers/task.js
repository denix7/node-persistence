const { getConnection } = require('../database');
const {v4} = require('uuid');

const getTasks = (req, res) => {
    const tasks = getConnection().get('tasks').value();
    res.json(tasks);
}

const createTask = (req, res) => {

    res.send('its works');
    const newTask = {
        id: v4(),
        name: req.body.name,
        description: req.body.description
    };

    getConnection().get('tasks')
    .push(newTask)
    .write();
}

const getTask = (req, res) => {
    id = req.params.id;

    const task = getConnection().get('tasks')
    .find({id: id})
    .value();
    
    res.json(task);
}

module.exports = {
    getTasks,
    createTask,
    getTask
}