import React, {useContext} from "react";
import {createFollow} from "../../util/flow";
import OrderDetailContext from "./Context";

const RejectWithReason = createFollow('RejectWithReasonModal', ({config = {}})=> {

    const {oid, reloadDetailInfo} = useContext(OrderDetailContext)

    const handleReject = ()=> {
        console.log('OrderDetailContext', OrderDetailContext)

        console.log('send:', config.sid, 'to:', oid);
        reloadDetailInfo()
    };

    return (
        <div>
            <span>点击弹出框填写理由驳回</span>
            <button onClick={handleReject}>驳回</button>
        </div>
    )
});

export default RejectWithReason