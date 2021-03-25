import {createRoute} from "../router";
import React from "react";
import LayoutForTopBarPanel from "../component/LayoutForTopBarPanel";
import {getPassportInfo} from "./store/passport";
import {Switch} from "react-router";

export default createRoute('/main', ()=>{

    const [{userInfo = {}, permissions = []}] = getPassportInfo();

    const routes = '';

    return (
        <div>
            <LayoutForTopBarPanel info={userInfo} />
            <div>
                <Switch>

                </Switch>
            </div>
        </div>
    )
})