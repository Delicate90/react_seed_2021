import React, {useEffect, useState} from "react";
import useBoolean from "../hooks/useBoolean";

const stateTest = ()=> {

    const [a, optA] = useBoolean(true, 'a');
    const [b, optB] = useBoolean(true, 'b');

    // const [d, setD] = useState('123324');

    // useEffect(()=>{
    //     setD((s)=>{
    //         console.log('s', s)
    //         return s===undefined?'1':'2'
    //     })
    // },[])

    return (
        <div>
            {/*<div>d:{d + ''}</div>*/}
            <div>a:{a + ''}</div>
            <div>b:{b + ''}</div>
            <div>
                <button onClick={optA.setTrue}>a true</button>
                <button onClick={optA.setFalse}>a false</button>
            </div>
            <div>
                <button onClick={optB.setTrue}>b true</button>
                <button onClick={optB.setFalse}>b false</button>
            </div>
        </div>
    )

};

export default stateTest