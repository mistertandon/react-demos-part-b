import axiosInstance from './axios';
import { APP_END_POINTS, HTTP_METHODS } from './../helpers/constants';

axiosInstance.interceptors.request.use((request) => {
    console.log('request main', request);
    return request;
});

axiosInstance.interceptors.response.use((response) => {
    // const {url}requUrl = 
    const { config: { url: reqUrl } } = response;

    if (APP_END_POINTS === reqUrl) {
        
    }
    console.log('response main', response);
    return response;
});

const defineHeaders = (definedHeaders = {}) => {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        ...definedHeaders,
    }

    return headers
}

export const makeRequest = async (method, url, data = {}, definedHeaders = {}) => {
    console.log('httpMethod', method);
    const headers = defineHeaders(definedHeaders);

    try {
        const response = await axiosInstance({
            method,
            url,
            data,
            headers
        });

        return response.data;

    } catch (error) {

    }

}