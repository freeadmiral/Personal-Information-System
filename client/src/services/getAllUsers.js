import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

let apiEndpoint = apiUrl + "/getUsers";

export function getbirthDates() {
    return http.get(apiEndpoint);
}