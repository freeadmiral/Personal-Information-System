import {
    apiUrl
} from "../config.json";
import axios from 'axios';
import qs from 'qs';


function paramsSerializer(params) {
    return qs.stringify(params, {
        encode: false
    })
}

const apiEndpoint = apiUrl;

export function updateCompany(values, id) {
    console.log("servis ", values);
    axios({
        method: 'put',
        url: apiEndpoint + "/" + id,
        data: paramsSerializer({
            id: id,
            name: values.name,
            logo: values.logo[0].thumbUrl
        })
    });
}