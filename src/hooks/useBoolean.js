import {useState} from "react";

const useBoolean = (initData = false)=>{
    const [bool, setBool] = useState(initData)

    const setTrue = ()=> {
        setBool(true)
    }

    const setFalse = ()=> {
        setBool(false)
    }
    const set = (_bool)=> {

    }

    console.log('boolean')

    return [bool, setTrue, setFalse]
}

export default useBoolean