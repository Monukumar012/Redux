import { CHANNEL_FAIL, CHANNEL_REQUEST, CHANNEL_SUCCESS, SUBSCRIBE,UNSUBSCRIBE, VIDEOS_FAIL,
     VIDEOS_REQUEST, VIDEOS_SUCCESS } from "./constants";

export const videoReducer = (state={videos:[],loading:false,error:null},action)=>{
    switch(action.type){
        case VIDEOS_REQUEST:
            return {
                loading:true,
                videos:[]
            }
        case VIDEOS_SUCCESS:
            return {
                loading:false,
                videos:action.payload
            }
        case VIDEOS_FAIL:
            return {
                loading:false,
                error:action.payload.error,
                videos:[]
            }
        default : return {...state};
    }
}

export const channelReducer = (state={channel:{},loading:false,error:null},action)=>{
    switch(action.type){
        case CHANNEL_REQUEST:
            return {
                loading:true,
                channel:{}
            }
        case CHANNEL_SUCCESS:
            return {
                loading:false,
                channel:action.payload,
                error:null
            }
        case CHANNEL_FAIL:
            return {
                loading:false,
                error:action.payload.error,
                channel:{}
            }
        case UNSUBSCRIBE:
            return {
                loading:false,
                channel:{...state.channel,subscribers:state.channel.subscribers-1}
            }
        case SUBSCRIBE:
            return {
                loading:false,
                channel:{...state.channel,subscribers:state.channel.subscribers+1}
            }
        default : return {...state}
    }
}