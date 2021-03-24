import {createRoute} from "../router";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import config from "../config";
import {u, useHistory} from 'react-router-dom';

export default createRoute({path: '/login', auth: false}, ()=>{

    const [t, setToken] = useLocalStorage(config.TOKEN_KEY);
    const history = useHistory();

    const login = ()=> {
        setToken('12334353453523123123');
        history.replace({
            pathname: '/main/999',
            state: {vvv: 'vvv'},
            query: {qqq: 'qqq'}
        });
    };

    console.log('history', history)

    return (
        <div>
            <button onClick={login}>login</button>
        </div>
    )
})