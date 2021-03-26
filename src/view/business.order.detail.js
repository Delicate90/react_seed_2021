import {createRoute} from "../router";
import React from "react";
import {useParams} from "react-router";
import {getOrderDetailInfo} from "./store/order";
import {collectFollows} from "../util/flow";
import CompanyBasicInfo from "./business.order.detail/Interact.CompanyBasicInfo";
import OrderDetailContext from "./business.order.detail/Context";

export default createRoute('/main/business/orderDetail/:oid', ()=> {

    const {oid = ''} = useParams();

    const [{state, stateStr, reasonType, reason, components}, {run:reloadDetailInfo, loading: detailInfoLoading}] = getOrderDetailInfo(oid);

    //归集follow组件并根据detailInfo.components组织显示项
    const follows = collectFollows(require.context('./business.order.detail/', false, /^\.\/Follow\..*\.js$/), components)

    return (
        <OrderDetailContext.Provider value={{oid, reloadDetailInfo}}>
            <div>
                <div>/业务管理/产品订单/订单详情</div>
                <div>固定产品订单标题</div>
                <div>订单状态: {stateStr}</div>
                <div>驳回/拒绝理由: {reasonType + '-' + reason}</div>
                <div>可变内容组件区域:</div>
                <div>
                    {CompanyBasicInfo(components)}
                </div>

                <div>跟进交互区域:</div>
                <div>{follows}</div>
            </div>
        </OrderDetailContext.Provider>
    )
})