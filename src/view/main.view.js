import {createRoute} from "../router";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import config from "../config";
import {useHistory, useLocation, useParams} from "react-router";

export default createRoute('/main/:id', ()=>{
    console.log('aaa');
    const [t,s,clearToken] = useLocalStorage(config.TOKEN_KEY);
    const {replace} = useHistory();
    const {id} = useParams();
    const {state = {}, query = {}} = useLocation();

    const logout = ()=> {
        clearToken();
        replace('/login')
    };

    return (
        <>
            <button onClick={logout}>logout</button>
            <div>id: {id}</div>
            <div>state: {JSON.stringify(state)}</div>
            <div>query: {JSON.stringify(query)}</div>
        </>
    )
})