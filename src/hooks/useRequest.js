import useAsync from "./useAsync";
import AXIOS from 'axios';
import qs from 'qs';

const CONTENT_TYPE = {
    APPLICATION_X_WWW_FORM_URLENCODED: 'application/x-www-form-urlencoded',
    APPLICATION_JSON: 'application/json',
    FORM_DATA: "multipart/form-data"
};

const METHOD = {
    POST: 'POST',
    GET: 'GET'
};

const useRequest = (service = {}, options = {})=> {

    const promiseService = ()=>{
        const {url, data = {}, headers = {}, method = 'POST', ...args} = service;

        return new Promise((resolve, reject) => {
            AXIOS({method, url, data: qs.stringify(data), headers}).then(res=>{

            }).catch(err=>{

            })
        })
    }
    return useAsync(promiseService, options)
};

export default useRequest