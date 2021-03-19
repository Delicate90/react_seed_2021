import {useState} from "react";

const url = {
    add: '',
    edit: '',
    delete: '',
    detail: '',
    list: ''
};

const useUsers = ()=> {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const load = async ()=> {

    };
    const add = async (user = {})=> {
        try {
            const res = await fetch(url.add, user)
            return true
        } catch (e) {
            return false
        }
    };
    return [users, {loading, load, add}]
};