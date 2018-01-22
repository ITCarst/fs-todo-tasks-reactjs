const tasksService = require('./tasks.service');
const { requestErrorHandler, notPermittedError } = require('../error-handler');
const { validateId } = require('../../lib/validator');


exports.getTasks = (req, res, next) => {
    return tasksService.getTasks()
        .then(stream => {
            res.type('json');
            stream.pipe(res)
        })
        .catch(requestErrorHandler.bind(res, next));
}

exports.getTask = (req, res, next) => {
    const taskId = req.params.id;

    return validateId(taskId)
        .then(id => tasksService.getTask(taskId))
        .then(task => {
            if (!task) return res.status(404).json(`Task with ${taskId} not found`);
            res.type('json');
            res.send(task);
        })
        .catch(requestErrorHandler.bind(res, next));
};

exports.updateTask = (req, res, next) => {
    const taskId = req.params.id;
    
    return validateId(taskId)
        .then(id => tasksService.updateTask(id, req.body))
        .then(task => {
            res.type('json');
            res.send(task);
        })
        .catch(requestErrorHandler.bind(res, next));
};

exports.createTask = (req, res, next) => {
    return tasksService.createTask(req.body)
        .then(id => res.status(201).json(`task_created ${id}`))
        .catch(requestErrorHandler.bind(res, next));
};

exports.deleteTask = (req, res, next) => {
    const taskId = req.params.id;

    return validateId(taskId)
        .then(id => tasksService.deleteTask(taskId))
        .then(buffer => res.status(200).json(`task_deleted ${taskId}`))
        .catch(requestErrorHandler.bind(res, next));
};