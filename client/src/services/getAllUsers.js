import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

const apiEndpoint = apiUrl + "/getUsers/birthDate";

export function getbirthDates() {
    return http.get(apiEndpoint);
}

const apiEndpoint2 = apiUrl + "/getAllUsers";

export function getAllUsers() {
    return http.get(apiEndpoint2);
}