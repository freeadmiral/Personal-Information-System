import axios from 'axios';
import {
    apiUrl
} from '../config.json';

const apiEndpoint = apiUrl + "/login";

export function login(username, password) {
    return axios.post(apiEndpoint, {
        username,
        password
    });
};