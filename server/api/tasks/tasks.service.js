const fs = require('fs');
const path = require('path');

const { ItemNotFound, FileError, InvalidBody, InvalidId } = require('../../lib/errors');
const { promisify } = require('../../utils/index');
const { persitancePath } = require('../../../config/config');

const persitance = path.join(persitancePath, 'tasks.json');
const readFileSync = promisify(fs, 'readFileSync');
const writeFile = promisify(fs, 'writeFile');

function getNowDate() {
	const today = new Date(), 
		dd = today.getDate(), 
		mm = today.getMonth()+1, 
		yyyy = today.getFullYear();

	return mm + '-' + dd + '-' + yyyy;
}

function getFile(read = 'readable') {
    const stream = fs.createReadStream(persitance);
    return new Promise((resolve, reject) => {
        stream.on('error', err => reject(new FileError(err)));
        stream.on(read, () => resolve(stream));
    });
}

function getTaskById(buffer, id) {
    const { tasks } = JSON.parse(buffer.toString());
    return JSON.stringify(
        tasks[Object.keys(tasks).find(task => parseInt(tasks[task].id) === parseInt(id))]
    );
}

function readTasks() {
	return JSON.parse(fs.readFileSync(persitance));
}

exports.getTasks = () => getFile();
exports.getTask = (id) => {
	const buffer = fs.readFileSync(persitance);
	return getTaskById(buffer, id);
};

exports.createTask = ({ title, description, date, completed }) => {
	console.log("CRAETE")
	const { tasks } = readTasks();
	const last = tasks[Object.keys(tasks)[Object.keys(tasks).length - 1]];
	let id, allTasks = {
		tasks: tasks
	};

	if (last) id = parseInt(last.id) + 1;

	allTasks['tasks'].push({
		id: id || 1,
		title: title || '',
		description: description || '',
		date: date || getNowDate(),
		completed: completed || false
	});

	return writeFile(`${persitance}`, JSON.stringify(allTasks, null, 4))
		.then(() => id || 1)
		.catch(err => err);
}

exports.updateTask = (id, {title, description, date, completed}) => {
	const { tasks } = readTasks();

	const currentTask = {
		id: id,
		title: title,
		description: description,
		date: date || getNowDate(),
		completed: completed || false
	}
	let allTasks = {
		tasks: []
	};
	
	tasks.find(task => {
		if (parseInt(task.id) === parseInt(id)) task = currentTask;
		allTasks.tasks.push(task);
	});

	const save = writeFile(`${persitance}`, JSON.stringify(allTasks, null, 4));

	return currentTask;
}

exports.deleteTask = (id) => {
	let {tasks} = JSON.parse(fs.readFileSync(persitance));
	tasks = {
		tasks: tasks.filter(task => parseInt(task.id) !== parseInt(id))
	};

	return writeFile(`${persitance}`, JSON.stringify(tasks, null, 4));
}