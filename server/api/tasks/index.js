const router = require('express').Router();
const multer = require('multer');
const tasksHandler = require('./tasks.handler');

const upload = multer({
	storage: multer.memoryStorage()
});

router
	.get('/', (req, res) => {
		res.render('index', { 
			title: 'Tasks', 
			apiURL: `api`
		});
	})
	.get('/tasks', tasksHandler.getTasks)
	.get('/tasks/:id', tasksHandler.getTask)
	.put('/tasks/:id', tasksHandler.updateTask)
    .post('/tasks', tasksHandler.createTask)
    .delete('/tasks/:id', tasksHandler.deleteTask);

module.exports = router;
