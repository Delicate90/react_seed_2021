import {useCallback, useEffect, useState} from "react";

const useAsync1 = (func, auto = false)=> {

    const [value, setValue] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const run = useCallback(()=>{
        console.log('run')
        setLoading(true)
        setError(null)
        return func().then(setValue).catch(setError).finally(()=>setLoading(false))
    }, [func])

    useEffect(()=>{
        console.log('init')
        if (auto) {
            run()
        }
    },[])

    return [value, {run, loading, error}]
};

export default useAsync1