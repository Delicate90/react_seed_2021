import {useAuthPostJSON} from "../../hooks/useRequest";

const API = {
    info : '/passport/info'
}

export const getPassportInfo = ()=> {
    return useAuthPostJSON({url: API.info}, {})
}

