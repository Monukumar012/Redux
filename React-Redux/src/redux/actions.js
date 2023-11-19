import { CHANNEL_FAIL, CHANNEL_REQUEST, CHANNEL_SUCCESS,
     SUBSCRIBE,
     UNSUBSCRIBE,
     VIDEOS_FAIL, VIDEOS_REQUEST, VIDEOS_SUCCESS } from "./constants"

import axios from 'axios';


export const getVideos = ()=> async (dispatch)=>{
    try {
        console.log("hfsidxck");
        dispatch({type:VIDEOS_REQUEST});
        const {data} = await axios.get("http://localhost:8000/videos");
        console.log(data);
        dispatch({type:VIDEOS_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:VIDEOS_FAIL,payload:error});
    }
}

export const Subscribe = ()=> (dispatch)=>{
    dispatch({type:SUBSCRIBE});
}
export const unSubscribe = ()=> (dispatch)=>{
    dispatch({type:UNSUBSCRIBE});
}


export const getChannel = ()=> async (dispatch)=>{
    try {
        dispatch({type:CHANNEL_REQUEST});
        const {data} = await axios.get("http://localhost:8000/channel");
        console.log("channnneeelll",data);
        dispatch({type:CHANNEL_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:CHANNEL_FAIL,payload:error});
    }
}


// export const addVideo = (video)=> async (dispatch)=>{
//     try {
//         dispatch({type:VIDEOS_REQUEST});
//         const {data} = await axios.post("",data);
//         dispatch({type:VIDEOS_SUCCESS,payload:data});
//     } catch (error) {
//         dispatch({type:VIDEOS_FAIL,payload:error});
//     }
// }