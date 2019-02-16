import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';

const apiEndpoint = apiUrl + "/getUser";

export function getUserDetails(username) {
    return http.get(apiEndpoint + "/" + username); //.then(response => {
    //     console.log(response.data[0].name);
    // }).catch(err => {
    //     console.log(err);
    // })
}