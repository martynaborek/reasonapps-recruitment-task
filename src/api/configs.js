import axios from 'axios';

// base API host
const hostDev = 'https://www.reasonapps.pl';

const apiInstance = axios.create({
    baseURL: hostDev,
});

export {
    apiInstance
};
