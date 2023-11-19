import { DECREMENT_AMOUNT_BY_1, DECREMENT_AMOUNT_BY_VALUE, DECREMENT_BLOG_LENGTH_BY_1, 
    DECREMENT_BLOG_LENGTH_BY_VALUE, INCREMENT_AMOUNT_BY_1, 
    INCREMENT_AMOUNT_BY_VALUE, INCREMENT_BLOG_LENGTH_BY_1, 
    INCREMENT_BLOG_LENGTH_BY_VALUE, INITLIZE_BLOG, INITLIZE_USER } from "./constants.js";


// user reducer

export const userReducer = (state={name:"",amount:0},action)=>{
    switch(action.type){
        case INITLIZE_USER:
            return {name:action.payload.name,amount:action.payload.amount};
        case INCREMENT_AMOUNT_BY_1:
            return {...state,amount:state.amount+1};
        case DECREMENT_AMOUNT_BY_1:
            return {...state,amount:state.amount-1};
        case INCREMENT_AMOUNT_BY_VALUE:
            return {...state,amount:state.amount+action.payload};
        case DECREMENT_AMOUNT_BY_VALUE:
            return {...state,amount:state.amount-action.payload};
        default:
                return state;
    }
}

// blog reducer


export const blogReducer = (state={name:"",length:0},action)=>{
    switch(action.type){
        case INITLIZE_BLOG:
            return {name:action.payload.name,length:action.payload.length};
        case INCREMENT_BLOG_LENGTH_BY_1:
            return {...state,length:state.length+1};
        case DECREMENT_BLOG_LENGTH_BY_1:
            return {...state,length:state.length-1};
        case INCREMENT_BLOG_LENGTH_BY_VALUE:
            return {...state,length:state.length+action.payload};
        case DECREMENT_BLOG_LENGTH_BY_VALUE:
            return {...state,length:state.length-action.payload};
        default:
                return state;
    }
}