import {Route, Redirect} from 'react-router-dom';
import React, {Fragment} from "react";
import config from '../config';
import useLocalStorage from "../hooks/useLocalStorage";

const AuthRoute = ({auth = true, ...args})=> {
    const [token] = useLocalStorage(config.TOKEN_KEY);

    if (!auth) return <Route {...args}/>
    if (!token) return <Redirect to={config.REDIRECT_PATH}/>
    return <Route {...args}/>
};

export const createRoute = (_path = '', container)=> {
    if (!_path) {
        return <Fragment/>
    }
    if (typeof _path === 'string') {
        return <AuthRoute path={_path} component={container} auth={true}/>
    }
    if (typeof _path === 'object') {
        const {path, strict = false, exact = false, auth = false} = _path;
        return <Route path={path} component={container} strict={strict} exact={exact} auth={auth}/>;
    }
    return <Fragment/>
}

export const collectRoutes = (contexts)=> {
    const routes = contexts.keys().map(key=>({...contexts(key).default, key}));
    routes.push(<Redirect exact key={'________base_path'} from={'/'} to={config.BASE_PATH}/>)
    return routes
};