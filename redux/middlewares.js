import { intilizeUser,intilizeBlog } from './actions.js'
import axios from 'axios';

export function getUserHelperWithID(id){
    return async  (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:3000/user/${id}`);
        return dispatch(intilizeUser(data));
    }
}

export function getBlogHelperWithID(id){
    return async (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:3000/blogs/${id}`);
        return dispatch(intilizeBlog(data));
    }
}