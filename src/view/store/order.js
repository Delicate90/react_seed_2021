import useRequest, {useAuthPostJSON} from "../../hooks/useRequest";

const API = {
    order: {
        detailInfo: '/temp/detailInfo.json'
    }
};

export const getOrderDetailInfo = (oid)=> {
    return useRequest({url: API.order.detailInfo, data: {oid}, method: 'GET'})
}