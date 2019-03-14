import {
    apiUrl
} from "../config.json";
import axios from 'axios';
import qs from 'qs';
import moment from 'moment';

function paramsSerializer(params) {
    return qs.stringify(params, {
        encode: false
    })
}
const apiEndpoint = apiUrl + "/register";

export function createUser(values) {
    axios({
        method: 'post',
        url: apiEndpoint,
        data: paramsSerializer({
            name: values.name,
            surname: values.surname,
            username: values.username,
            birthDate: values.birthDate,
            password: values.password,
            department: values.department,
            entryDate: values.entryDate,
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