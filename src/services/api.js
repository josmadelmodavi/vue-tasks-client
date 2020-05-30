import axios from 'axios'

const HOST = "https://edimossilva-task-manager.herokuapp.com/";
const LOGIN_URL = `${HOST}/auth/login`;
const TASKGROUP_URL = `${HOST}/task_lists`;

export const doLoginApi = (username, password) => {
    const params = { username, password };

    return axios.post(LOGIN_URL, params);
};

export const getTaskgroupsApi = () => {
    const token = localStorage.getItem("token");
    const requestConfig = {
        headers: {
            Authorization: `Basic ${token}`
        }
    };

    return axios.get(TASKGROUP_URL, requestConfig);

};