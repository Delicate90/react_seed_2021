import React from "react";
import {HashRouter, Switch} from 'react-router-dom';
import {collectRoutes} from "./router";

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