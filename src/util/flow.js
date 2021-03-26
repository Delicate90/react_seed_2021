import React, {Fragment} from "react";

export const createFollow = (name, Component)=> {
    return {name, Component}
};

export const collectFollows = (contexts, componentsConfig = [])=> {
    const containers = contexts.keys().map(key=>contexts(key).default);
    const resComponents = [];
    containers.forEach(({name, Component}, index)=>{
        const config = componentsConfig.find(ccf=>ccf.type === 'follow' && ccf.cid === name);
        if (config) {
            resComponents.push(<Component key={index} config={config}/>)
        }
    })
    return resComponents
};

export const createInteract = (name, Component)=> {
    return (componentsConfig = [])=> {
        const config = componentsConfig.find(ccf=>ccf.type === 'interact' && ccf.cid === name);
        if (config) {
            return <Component config={config}/>
        } else {
            return <Fragment/>
        }
    }
};


