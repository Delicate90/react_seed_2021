import {createRoute} from "../router";
import React from "react";
import LayoutForTopBarPanel from "../component/LayoutForTopBarPanel";
import useRequest from "../hooks/useRequest";

export default createRoute('/main', ()=>{

    const [user] = useRequest()

    return (
        <div>
            <LayoutForTopBarPanel/>
        </div>
    )
})