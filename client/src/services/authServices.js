import axios from "axios";
import {
    apiUrl
} from "../config.json";

const apiEndpoint = apiUrl + "/account/login";

export function login(username, password) {
    return await axios
        .post(apiEndpoint, {
            username,
            password
        })
        .then(res => {
            localStorage.setItem('token', res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
}