import {useState} from "react";

export default (initialState, url = '', options = {})=> {
    const [result, setResult] = useState(initialState);
    let error = null;
    fetch(url, options).then(setResult).catch(e=>error = e)


    return [result, error]
}