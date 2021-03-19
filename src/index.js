import React from "react";
import ReactDOM from 'react-dom';
import Test from './test';

const App = ()=> (
    <div>
        <Test/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('app'))