import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';



export function getUserDetails(user_id) {
    const apiEndpoint = apiUrl + "/:user_id";
    return http.get(apiEndpoint, {
        user_id
    });
}