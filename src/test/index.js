import React from "react";
import useAsync from "../hooks/useAsync";
import useBoolean from "../hooks/useBoolean";

export default ()=> {

    const [data, dataOptions = {}] = useAsync(load(), {auto: false})
    const [b, sBT, sBF] = useBoolean();

    function load() {
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve('hello!!!!!')
            }, 2000)
        })
    }

    return (
        <div>
            <div>loading: {dataOptions.loading + ''}</div>
            <div>data: {data}</div>
        </div>
    )
}