import axios from 'axios';
import { parseCookies } from 'nookies'

const cookies = parseCookies()
console.log('parseCookies ', cookies)

let token = '';
let type = 'Bearear ';

// if (typeof window !== "undefined") {
//     token = localStorage.getItem("token");
//     type = localStorage.getItem("token_type");
//     // console.log(token);
// }

if (cookies.token != undefined) {
    token = cookies.token;
}

const Api = axios.create({
    timeout: 10000,
    // baseURL: 'https://reqres.in/'//process.env.BACKEND_URL,
    baseURL: process.env.API_HOST_URL,
});

// console.log('process.env  ', process.env)

if (token != '') {
    Api.defaults.headers.common['Authorization'] = type + ' ' + token;
}
Api.defaults.headers.post['Content-Type'] = 'application/json';
// Api.defaults.timeout = 180000;

// Api.interceptors.response.use((response) => response, (error) => {
//     // whatever you want to do with the error
//     console.log('Api.interceptors :', error.message);
//     throw error;
// });

export default Api;