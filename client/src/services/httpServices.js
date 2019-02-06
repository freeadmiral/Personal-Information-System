import axios from 'axios';

axios.interceptors.response.use(null, error => {
    const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedErrors) {
        console.log("logging error", error);
        alert("an unexpected error occured");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};