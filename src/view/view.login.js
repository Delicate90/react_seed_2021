import {createRoute} from "../router";
import React, {useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import config from "../config";
import {useHistory} from 'react-router-dom';
import useServerResponse from "../hooks/useServerResponse";

export default createRoute({path: '/login', auth: false}, ()=>{

    const [t, setToken, clearToken] = useLocalStorage(config.TOKEN_KEY);
    const history = useHistory();

    useEffect(()=>{
        if (t) clearToken()
    }, [])

    const login = ()=> {
        setToken('12334353453523123123');
        history.replace('/main');
    };

    const response = useServerResponse();

    return (
        <div>
            <div>server</div>
            <div>{response && response.readRoot()}</div>
            <button onClick={login}>login</button>
        </div>
    )
})