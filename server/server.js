const express = require('express')
const {pipeToNodeWritable} = require('react-server-dom-webpack/writer.node.server')
const React = require('react')
const cors = require('cors')

const app = new express();

app.use(cors());

const ReactApp = ()=><div>hellossssdfsdfsdf212313ss</div>

app.get('/', async (req, res)=>{
    console.log(res, res.on)
    pipeToNodeWritable(React.createElement(ReactApp, {}), res, {})
})

app.listen('4321', (e)=>{
    console.log('start')
})