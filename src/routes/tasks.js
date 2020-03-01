const { Router } = require('express');
const router = Router();

const tasks = require('../controllers/task');

router.get('/tasks', tasks.getTasks);
router.get('/tasks/:id', tasks.getTask);
router.post('/tasks', tasks.createTask);
router.put('/tasks/:id', );
router.delete('/tasks/:id', );

module.exports = router;