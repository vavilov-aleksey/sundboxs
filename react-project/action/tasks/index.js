import axios from "axios";
import {tasksLoading} from "./tasksLoading";
import {tasksList} from "./tasksList";


export function tasks() {
    return (dispatch) => {
        const apiUrl = 'http://redmine.nutnetdev.ru';
        const key = localStorage.getItem('authorization') === null ? false : {'Authorization': localStorage.getItem('authorization')};

        dispatch(tasksLoading(true));

        return axios.get(`${apiUrl}/issues.json?assigned_to_id=me&limit=100`, {
            headers: key
        })
            .then(response => {
                dispatch(tasksLoading(false));
                return response
            })
            .then(response => {
                if (response.status === 200) {
                    dispatch(tasksList(response.data))
                }
            })
            .catch(() => {

            });

    }
}