import {
    apiUrl
} from "../config.json";
import http from './httpServices';

const apiEndpoint = apiUrl + "/account/login";

export function login(username, password) {
    http.post(apiEndpoint, {
            username,
            password
        }).then(function (response) {
            console.log("response", response);
        })
        .catch(function (error) {
            console.log(error);
        });
}