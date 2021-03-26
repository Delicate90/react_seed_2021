import {createInteract} from "../../util/flow";
import React from "react";
import useRequest from "../../hooks/useRequest";

const CompanyBasicInfo = createInteract('CompanyBasicInfo', ({config})=> {

    const {import:d} = config;

    const [info] = useRequest({url: d.url})

    return (
        <div>CompanyBasicInfo</div>
    )
});

export default CompanyBasicInfo