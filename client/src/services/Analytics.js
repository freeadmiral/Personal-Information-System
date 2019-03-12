import {
    apiUrl
} from "../config.json";
import http from './httpServices';

const apiEndpoint = apiUrl + "/cityAnalytic";

export function cityAnalytic() {
    return http.get(apiEndpoint);
}

export function positionAnalytic() {
    const apiEndpoint = apiUrl + "/positionAnalytic";
    return http.get(apiEndpoint);
}