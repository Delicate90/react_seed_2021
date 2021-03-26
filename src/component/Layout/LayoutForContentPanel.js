import React from "react";
import {Switch} from "react-router";

const LayoutForContentPanel = ({children})=> {
    return <div><Switch>{children}</Switch></div>
};

export default LayoutForContentPanel