import {
    apiUrl
} from "../config.json";
import http from '../services/httpServices';
import qs from 'qs';
import axios from 'axios';
import moment from 'moment';
moment.locale('tr');

function paramsSerializer(params) {
    return qs.stringify(params, {
        encode: false
    })
}

const apiEndpoint = apiUrl + "/getVacation";

export function getVacation(userId) {
    return http.get(apiEndpoint + "/" + userId);
}

export function getHourlyVacation(userId) {
    const apiEndpoint3 = apiUrl + "/getHourlyVacation";
    return http.get(apiEndpoint3 + "/" + userId);
}

const apiEndpoint2 = apiUrl + "/vacationReq";


export function newDailyVacation(values, userId) {
    axios({
        method: 'post',
        url: apiEndpoint2,
        data: paramsSerializer({
            userId: userId,
            vacationType: values.vacationType,
            reason: values.reason,
            address: values.address,
            entryDate: values.date[1]._d,
            leaveDate: values.date[0]._d,
        })
    });
}

export function newHourlyVaction(values, userId) {
    console.log("servis ", values);
    axios({
        method: 'post',
        url: apiEndpoint2,
        data: paramsSerializer({
            userId: userId,
            vacationType: values.vacationType,
            reason: values.reason,
            address: values.address,
            date: values.date._d,
            startTime: moment(values.startTime._d).format('LT'),
            endTime: moment(values.endTime._d).format('LT')
        })
    });
}