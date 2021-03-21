import React, {useCallback} from "react";
import useAsync from "../hooks/useAsync";
import useBoolean from "../hooks/useBoolean";
import useAsync1 from "../hooks/useAsync1";

export default ()=> {
    console.log('test start')

    // const [a, setTrue, setFalse] = useBoolean(true);



    const load = useCallback(()=> {
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve('hello!!!!!')
            }, 2000)
        })
    }, [])

    // const [data, dataOptions = {}] = useAsync1(load, true);
    const [data, dataOptions = {}] = useAsync(load(), {auto: true})

    return (
        <div>
            <button onClick={dataOptions.run}>run</button>
            <div>loading: {dataOptions.loading + ''}</div>
            <div>data: {data}</div>
        </div>
    )
}