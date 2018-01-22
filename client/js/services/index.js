import config from '../../../config/config'

function get_delete(url, method = "GET", json = true) {
    return fetch(url, {
            method: method
        })
        .then(res => !res.ok ? new Error(res.statusText) : res)
        .then(res => (json && !(res instanceof Error)) ? res.json() : res)
}

function post_put(url, body, json, type) {
    return fetch(url, {
            method: `${type}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(res => !res.ok ? new Error(res.statusText) : res)
        .then(res => (json && !(res instanceof Error)) ? res.json() : res);
}

export default {
    getTasks() {
        return get_delete(`${APIuri}/tasks`);
    },
    getTask(task) {
        return get_delete(`${APIuri}/tasks?${task.id}`);
    },
    createTask(task) {
        return post_put(`${APIuri}/tasks`, task, true, 'POST').
            then(res => {return {res, task}})
            .catch(err => err)
    },
    updateTask(task) {
        return post_put(`${APIuri}/tasks/${task.id}`, task, true, 'PUT');
    },
    deleteTask(id) {
        return get_delete(`${APIuri}/tasks/${id}`, 'DELETE');
    }
};
