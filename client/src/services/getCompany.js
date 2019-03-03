import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

const apiEndpoint = apiUrl + "/getCompany";

export function getCompany(username) {
    return http.get(apiEndpoint + "/" + username);
}