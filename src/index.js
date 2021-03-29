import React, {Suspense} from "react";
import {ErrorBoundary} from 'react-error-boundary';
import {HashRouter, Switch} from 'react-router-dom';
import {collectRoutes} from "./router";

const App = ()=> {

    const routes = collectRoutes(require.context('./view/', false, /^\.\/view\..*\.js$/));

    return (
        <Suspense fallback={null}>
            <ErrorBoundary FallbackComponent={Error}>
                <HashRouter><Switch>{routes}</Switch></HashRouter>
            </ErrorBoundary>
        </Suspense>
    )
};

const Error = ({error})=> {
    return (
        <div>
            <h1>Application Error</h1>
            <pre style={{whiteSpace: 'pre-wrap'}}>{error.stack}</pre>
        </div>
    );
};

export default App