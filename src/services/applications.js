import axios from 'axios';

const URL = 'http://localhost:3001/applications'

const getItems = () => {
    const request = axios.get(URL)
    return request.then(resp => resp.data)
}

const add = (newItem) => {
    const request = axios.post(URL, newItem)
    return request.then(resp => resp.data)
}

const remove = (id) => {
    const request = axios.delete(`${URL}/${id}`)
    return request.then(resp => resp.data)
}

export default {getItems, add, remove}