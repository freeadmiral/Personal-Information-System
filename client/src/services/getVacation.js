import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

const apiEndpoint = apiUrl + "/getVacation";

export function getVacation(userId) {
    return http.get(apiEndpoint + "/" + userId);
}