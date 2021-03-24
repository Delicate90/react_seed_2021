import React from "react";
import useBoolean from "../hooks/useBoolean";
import useRequest from "../hooks/useRequest";

export default ()=> {

    // const load = ()=> new Promise((resolve, reject) => {
    //     fetch('http://localhost:35544').then(res=>res.text()).then(res=>resolve(res)).catch(err=>{
    //         reject(err)
    //     })
    // })

    const [bool, optBool] = useBoolean(false, 'bool');
    // const [data, dataOptions = {}] = useAsync(load, {auto: false, initData: 'hi!!'})

    const [data, dataOptions = {}] = useRequest({url: 'http://192.168.9.242:8082/tripartite/hello/tripartite', data: {token:'123'}, headers: {Authorization:'321'}}, {initData: '666', auto: false})

    return (
        <div>
            <button onClick={dataOptions.run}>run</button>
            <div>loading: {dataOptions.loading + ''}</div>
            <div>data: {data}</div>
            <div>bool: {bool + ''}</div>
            <div>
                <button onClick={optBool.setTrue}>bool true</button>
                <button onClick={optBool.setFalse}>bool false</button>
            </div>
        </div>
    )
}