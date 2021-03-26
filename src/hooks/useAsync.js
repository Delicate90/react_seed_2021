import {useCallback, useEffect, useMemo, useRef, useState} from "react";
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
    // 可执行
    let ready = true;
    // 轮询
    let pollingIndex = 0;
    let pollingContainer = null;
    // loading延迟
    let loadingDelayContainer = null;

    const [data, setData] = useState(initData);
    const [err, setErr] = useState('');
    const [loading, {setTrue: startLoading, setFalse: stopLoading}] = useBoolean(false, 'loading');

    const _run = ()=> {
        if (!visible) {
            return
        }
        if(!ready) {
            return
        }
        ready = false;
        startLoading();
        promiseA().then(data=>{
            if (visible) setData(data)
        }).catch(err=>{
            if (visible) setErr(err)
        }).finally(()=>{
            if (loadingDelay && typeof loadingDelay === 'number' && loadingDelay > 0) {
                loadingDelayContainer = setTimeout(()=>{
                    stopLoading();
                    ready = true;
                }, loadingDelay)
            } else {
                stopLoading();
                ready = true;
            }
        })
    };

    const run = useCallback(()=> {
        if (pollingInterval && typeof pollingInterval === 'number' && pollingInterval > 0) {
            pollingContainer = setInterval(()=>{
                _run();
                pollingIndex++;
            }, pollingInterval)
        } else {
            _run()
        }
    }, [promiseA]);

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
    if (!promiseA || !promiseA instanceof Promise) {
    } else {
        useEffect(()=>{
            if (auto) {
                run()
            }
        }, [])
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