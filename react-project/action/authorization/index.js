import {authorizationLoading} from "./authorizationLoading";
import {authorizationUser} from "./authorizationUser";
import {authorizationError} from "./authorizationError";
import axios from "axios";
import {authorized} from "./authorized";

export function authorization(authorization) {
    return (dispatch) => {
        const apiUrl = 'http://redmine.nutnetdev.ru';
        const key = localStorage.getItem('authorization') === null ? false : {'Authorization': localStorage.getItem('authorization')};

        dispatch(authorizationLoading(true));

        switch (authorization.key) {
            case 'key':
                return axios.get(`${apiUrl}/users/current.json`, {
                    headers: key
                })
                    .then(response => {
                        dispatch(authorizationLoading(false));

                        return response
                    })
                    .then(response => {
                        if (response.status === 200) {
                            const authorization = response.config.headers.Authorization;
                            localStorage.setItem('authorization', authorization);
                            dispatch(authorizationUser(response.data.user))
                        }
                    })
                    .catch(() => {
                        dispatch(authorized(false));
                        localStorage.removeItem('authorization')
                    });
            case 'login':
                const username = authorization.username;
                const password = authorization.password;

                return axios.get(`${apiUrl}/users/current.json`, {
                    auth: {
                        username: username,
                        password: password,
                    },
                })
                    .then(response => {
                        dispatch(authorizationLoading(false));
                        return response
                    })
                    .then(response => {
                        if (response.status === 200) {
                            const authorization = response.config.headers.Authorization;
                            localStorage.setItem('authorization', authorization);
                            dispatch(authorizationUser(response.data.user));
                            dispatch(authorized(true));
                        }
                    })
                    .catch(() => {
                        dispatch(authorizationError(true));
                        dispatch(authorized(false));
                    });
            default:
                return '';
        }
    }
}