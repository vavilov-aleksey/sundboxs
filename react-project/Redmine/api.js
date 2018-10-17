import axios from "axios";

const apiUrl = 'http://redmine.nutnetdev.ru';

//Задачи
export function createTasks(username, password) {
    const key = localStorage.getItem('authorization')  === null ? false : {'Authorization': localStorage.getItem('authorization')};
    return axios.get(`${apiUrl}/issues.json?assigned_to_id=me&limit=100`, {
        headers: key
    }).then(
        response => response,
    )
}



export function timeEntries(interval) {
    const key = localStorage.getItem('authorization')  === null ? false : {'Authorization': localStorage.getItem('authorization')};

    return axios.get(`${apiUrl}/time_entries.json?user_id=me&=hours&spent_on=${interval}&limit=100`, {
        headers: key
    }).then(
        response => response
    )
}

export function addComment(comment, id, time) {
    const key = localStorage.getItem('authorization')  === null ? false : localStorage.getItem('authorization');
    axios.defaults.headers.post['Authorization'] = key;
    return axios.post(`${apiUrl}/time_entries.json`, {
            time_entry: {
                issue_id: id,
                hours: time,
                activity_id: 9,
                comments: comment ? comment : ''
            }
    })
    // console.log('Comment: ' + (comment ? comment : 'No Comment') + '/ Time: ' + time);
}
