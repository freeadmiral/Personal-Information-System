import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';
import qs from "qs";


const apiEndpoint = apiUrl + "/getUser";

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

function paramsSerializer(params) {
    return qs.stringify(params, {
        encode: false
    });
}

export function getUserDetails(username) {
    return http.get(apiEndpoint, paramsSerializer({
        username
    }), config)
}