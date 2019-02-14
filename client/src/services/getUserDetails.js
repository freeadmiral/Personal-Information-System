import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

const apiEndpoint = apiUrl + "/getUser";

export function getUserDetails(userId) {
    return http.get(apiEndpoint, {
        userId
    })
}