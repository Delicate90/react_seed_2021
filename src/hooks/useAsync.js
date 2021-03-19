import {useState} from "react";
import useBoolean from "./useBoolean";
import PropTypes from 'prop-types';

const useAsync = (promiseA, {
    auto = true,
    initData = '',
    pollingInterval = 0,
    loadingDelay = 0
} = {})=> {

    // 可继续
    let visible = true;
    // 轮询
    let pollingIndex = 0;
    let pollingContainer = null;
    // loading延迟
    let loadingDelayContainer = null;

    const [data, setData] = useState(initData);
    const [err, setErr] = useState('');
    const [loading, startLoading, stopLoading] = useBoolean(false);
    console.log('init loading', loading)

    const _run = ()=> {
        if (!visible) {
            return
        }
        startLoading();
        promiseA.then(data=>{
            if (visible) setData(data)

        }).catch(err=>{
            if (visible) setErr(err)
        }).finally(()=>{
            console.log('finally')
            // if (loadingDelay && typeof loadingDelay === 'number' && loadingDelay > 0) {
            //     loadingDelayContainer = setTimeout(stopLoading, loadingDelay)
            // } else {
            //     stopLoading()
            // }
        })
    };

    const run = ()=> {
        if (pollingInterval && typeof pollingInterval === 'number' && pollingInterval > 0) {
            pollingContainer = setInterval(()=>{
                _run();
                pollingIndex++;
            }, pollingInterval)
        } else {
            console.log('else');
            _run()
        }
    };

    const cancel = ()=> {
        visible = false;
        stopLoading();
        if (loadingDelayContainer) clearTimeout(loadingDelayContainer);
        if (pollingContainer) clearInterval(pollingContainer);
        if (pollingIndex > 0) pollingIndex = 0;
    };

    const setError = (err = '')=> {
        if (!err) {
            return
        }
        cancel();
        setErr(err);
    };

    const _setValue = (param = '')=> {
        if (!param) {
            return
        }
        cancel();
        if (param instanceof Function) {
            setData(param(data))
        }else {
            setData(param)
        }
    };

    //--执行阶段
    //主参数格式判断
    if (!promiseA) {
        setError('found no Promise.')
    }
    if (!promiseA instanceof Promise) {
        setError('found no Promise.')
    }
    if (auto) {
        run()
    }
    return [data, {loading, error:err, run, cancel, setData: _setValue, setError}]
};

useAsync.propTypes = {
    promiseA: PropTypes.func.isRequired,
    auto: PropTypes.bool,
    initData: PropTypes.any,
    pollingInterval: PropTypes.number,
    loadingDelay: PropTypes.number
};

export default useAsync