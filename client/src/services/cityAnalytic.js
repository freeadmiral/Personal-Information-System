import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

const apiEndpoint = apiUrl + "/cityAnalytic";

export function cityAnalytic() {
    return http.get(apiEndpoint);
}