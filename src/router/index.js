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
        if (Array.isArray(_path)) {
            return _path.map(p=><AuthRoute path={p} component={container} auth={true}/>)
        }
        const {path, strict = false, exact = false, auth = false} = _path;
        if (!path) {
            return <Fragment/>
        }
        if (Array.isArray(path)) {
            return path.map(p=><Route path={p} component={container} strict={strict} exact={exact} auth={auth}/>)
        } else {
            return <Route path={path} component={container} strict={strict} exact={exact} auth={auth}/>;
        }
    }
    return <Fragment/>
}

export const collectRoutes = (contexts)=> {
    const routes = contexts.keys().map(key=>{
        const container = contexts(key).default;
        if (Array.isArray(container)) {
            return container.map((c, index)=>({...c, key: key + '[' + index + ']'}))
        } else {
            return {...container, key}
        }
    }).flat();
    routes.push(<Redirect exact key={'________base_path'} from={'/'} to={config.BASE_PATH}/>)
    return routes
};