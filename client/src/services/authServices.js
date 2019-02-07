import {
    apiUrl
} from "../config.json";
import http from './httpServices';
import qs from "qs";


const apiEndpoint = apiUrl + "/account/login";

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

export function login(username, password) {
    return http.post(apiEndpoint, paramsSerializer({
        username,
        password
    }), config)
}