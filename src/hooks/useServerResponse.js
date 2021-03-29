import {createFromFetch} from 'react-server-dom-webpack'

let cache = null;

const useServerResponse = ()=> {
    if (cache) {
        return cache
    }
    const res = createFromFetch(fetch('http://localhost:4321'))
    cache = res;
    return res
};

export default useServerResponse