import {useAuthPostJSON} from "../../hooks/useRequest";

const API = {
    info : '/passport/info'
}

export const getInfo = ()=> {
    return useAuthPostJSON({url: API.info}, {})
}