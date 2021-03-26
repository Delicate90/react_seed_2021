import React from "react";
import {Switch} from "react-router";

const LayoutForRightMainPanel = ({children})=> {
    return <div><Switch>{children}</Switch></div>
}

export default LayoutForRightMainPanel