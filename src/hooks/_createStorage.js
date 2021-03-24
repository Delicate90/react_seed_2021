const createStorage = (storage = {})=> {
    return (key)=> {
        const value = storage.getItem(key);
        const set = (v)=>storage.setItem(key, v);
        const clear = ()=>storage.removeItem(key)
        return [value, set, clear]
    }
}

export default createStorage