import {useMemo, useState} from "react";

const useBoolean = (initData = false)=>{
    const [bool, setBool] = useState(initData)

    const set = useMemo((_bool)=> {
        if (_bool !== bool) {
            console.log('boolean set: ', _bool)
            setBool(_bool)
        }
    }, [])
    return [bool, ()=>set(true), ()=>set(false)]
}

export default useBoolean