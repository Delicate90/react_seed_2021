import React from "react";
import {BrowserRouter, HashRouter, Switch} from 'react-router-dom';
import {collectRoutes} from "./router";
import Login from './view/login.view';
import Main from './view/main.view';

const App = ()=> {

    const routes = collectRoutes(require.context('./view/', false, /\.view\.js$/));

    return (
        <HashRouter>
            <Switch>
                {routes}
            </Switch>
        </HashRouter>
    )
};

export default App