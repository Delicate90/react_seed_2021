import {collectRoutes, createRoute} from "../router";
import React from "react";
import LayoutForTopBarPanel from "../component/Layout/LayoutForTopBarPanel";
import {getPassportInfo} from "./store/passport";
import LayoutForContentPanel from "../component/Layout/LayoutForContentPanel";

export default createRoute('/main', ()=>{

    const [{userInfo = {}, permissions = [{}]}, {loading}] = getPassportInfo();

    const routes = collectRoutes(require.context('./', false, /^\.\/main\..*\.js$/));

    return (
        <div>
            <LayoutForTopBarPanel info={userInfo}/>
            {permissions.length > 0 && <LayoutForContentPanel>{routes}</LayoutForContentPanel>}
        </div>
    )
})