import {useState} from "react";


const createStorageState = (storage = {})=> {
    return (key = '', initValue = '')=> {
        const [value, setValue] = useState(initValue);


        return [value, set, clean]
    }
};

export default createStorageState