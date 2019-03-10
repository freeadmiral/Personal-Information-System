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

export function updateUser(values, id) {
    console.log("servis ", values);
    axios({
        method: 'put',
        url: apiEndpoint + "/updateUser/" + id,
        data: paramsSerializer({
            id: id,
            name: values.name,
            surname: values.surname,
            username: values.username,
            password: values.password,
            department: values.department,
            position: values.position,
            gender: values.gender,
            registraitonNo: values.registraitonNo,
            responsibilites: values.responsibilites,
            country: values.country,
            city: values.city,
            website: values.website,
            email: values.email,
            phoneNumber: values.phoneNumber,
            skills: values.skills
        })
    });
}