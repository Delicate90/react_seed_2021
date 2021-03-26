import {useMemo, useState} from "react";

const useBoolean = (initData = false, key)=>{
    const [bool, setBool] = useState(initData)


    const set = (_bool)=> {
        setBool(_bool)
    }

    const actions = useMemo(()=>{
        const setTrue = ()=> set(true)
        const setFalse = ()=> set(false)
        return {setTrue, setFalse}
    }, [set])

    return [bool, actions]
}

export default useBoolean