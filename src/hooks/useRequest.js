import useAsync from "./useAsync";
import AXIOS from 'axios';
import qs from 'qs';
import useLocalStorage from "./useLocalStorage";
import config from "../config";

const CONTENT_TYPE = {
    APPLICATION_X_WWW_FORM_URLENCODED: 'application/x-www-form-urlencoded',
    APPLICATION_JSON: 'application/json',
    FORM_DATA: "multipart/form-data"
};

const METHOD = {
    POST: 'POST',
    GET: 'GET'
};

export const useRequest = (service = {}, options = {})=> {
    const promiseService = ()=>{
        return new Promise((resolve, reject) => {
            AXIOS(service).then(res=>{
                console.log(res)
                return res
            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    return useAsync(promiseService, options)
};

export const usePost = (service = {}, options)=> {
    service.method = METHOD.POST;
    service.data = service.data ? qs.stringify(service.data) : '';
    service.headers = {...(service.headers||{}), 'Content-Type': CONTENT_TYPE.APPLICATION_X_WWW_FORM_URLENCODED};
    return useRequest(service, options)
};

const _handleToken = (service)=> {
    const [token] = useLocalStorage(config.TOKEN_KEY);
    //todo 判断token是否存在
    service.headers = {...(service.headers || {}), token};
    return service
};

export const useAuthPost = (service = {}, options)=> usePost(_handleToken(service), options);

export const usePostJSON = (service = {}, options)=> {
    service.method = METHOD.POST;
    service.headers = {...(service.headers||{}), 'Content-Type': CONTENT_TYPE.APPLICATION_JSON};
    return useRequest(service, options)
};

export const useAuthPostJSON = (service = {}, options)=> usePostJSON(_handleToken(service), options);

export default useRequest