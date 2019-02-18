import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

const apiEndpoint = apiUrl + "/getUser";

export function getUserDetails(username) {
    return http.get(apiEndpoint + "/" + username);
}