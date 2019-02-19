import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

const apiEndpoint = apiUrl + "/getUsers";

export function getAllUsers() {
    return http.get(apiEndpoint);
}