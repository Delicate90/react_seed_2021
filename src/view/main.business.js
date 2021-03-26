import {collectRoutes, createRoute} from "../router";
import React from "react";
import LayoutForLeftMenuPanel from "../component/Layout/LayoutForLeftMenuPanel";
import LayoutForRightMainPanel from "../component/Layout/LayoutForRightMainPanel";

export default createRoute('/main/business',()=>{

    const routes = collectRoutes(require.context('./', false, /^\.\/business\..*\.js$/));

    return (
        <>
            <LayoutForLeftMenuPanel/>
            <LayoutForRightMainPanel>{routes}</LayoutForRightMainPanel>
        </>
    )
})