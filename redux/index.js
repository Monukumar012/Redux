// import { createStore } from 'redux';
// import axios from 'axios';
// import {createStore,applyMiddleware, combineReducers} from 'redux'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk';

// import { userReducer, blogReducer } from './reducers.js';
// import { getBlogHelperWithID, getUserHelperWithID } from './middlewares.js';
// import { incrementUserAmount } from './actions.js';


// redux must follow three principle
// 1. only one global store that use everywhere
// 2. Immutable Update -> state are read-only -> so don't change the previous state
// 3. reducer must be pure -> not depend on other or not update other reducer data

// Store 
// const store= createStore(reducer,applyMiddleware(logger.default));

//Reducer
// function reducer(state={amount:1},action){
//     if(action.type==="increment"){
//         // return state as a copy so that previous state not lost, although that was not needed but 
//         // don't chnage previous state // state must be read-only
//         return {amount:state.amount+1};  // immutable

//         // this is not recomeneded bcz it change the previous state, 
//         return state.amount=state.amount+1;  //mutable
//     }
//     return state;
// }

// Global state
// console.log(store.getState());

// Action - Simple object that send inside dispatch
// dispatch is funtion of store that automatically listen by the reducer
// {type:"increment"}

// store.dispatch({type:"increment"});

// console.log(store.getState());

// middleware - like when we need perform some action before incremnt action 
// dispatch directly call the reducers but when we need to do something before goto reducer when we use middleware
// like -> set state amount to userAmount store in DB so to init user first we have to call api to get user data

// applyMiddleware funtion use to use middleware it have in redux
// redux-logger -> ismiddleware use for print the state everytime when some action perform


// {type:_____, payload:_____} this is action 
// but we may call action from many file so we use action creators 
// action creators - is simple function that return action object so we simply use that funtion
// our main aim to make everything hardcoded and use that everywhere to avoid typeing mistake...or other

// Action Creator
// function increment(){
//     return {type:"INCREMENT"};
// }

// in this inside type is also a string and we may use many places 
//  we make this hardcoded by use const variable


// Action constants
// const INCREMENT="INCREMENT";
// const DECREMENT="DECREMENT";
// const INCREMENT_BY_AMOUNT="INCREMENT_BY_AMOUNT";
// const DECREMENT_BY_AMOUNT="DECREMENT_BY_AMOUNT";
// const INITLIZE_USER="INITLIZE_USER";



// actions creators

// function increment(){
//     return {type:INCREMENT};
// }

// function decrement(){
//     return {type:DECREMENT};
// }

// function incrementByAmount(value){
//     return {type:INCREMENT_BY_AMOUNT,payload:value};
// }

// function decrementByAmount(value){
//     return {type:DECREMENT_BY_AMOUNT,payload:value};
// }


// reducer
// function userReducer(state={name:"Monu", amount:0},action){
//     switch(action.type){
//         case INITLIZE_USER:
//             return {name:action.payload.name,amount:action.payload.amount};
//         case INCREMENT:
//             return {...state,amount:state.amount+1};
//         case DECREMENT:
//             return {...state,amount:state.amount-1};
//         case INCREMENT_BY_AMOUNT:
//             return {...state,amount:state.amount+action.payload};
//         case DECREMENT_BY_AMOUNT:
//             return {...state,amount:state.amount-action.payload};
//         default:
//              return state;
//     }
// }


// // Store
// const store= createStore(userReducer,applyMiddleware(logger.default,thunk.default));

// store.dispatch(increment());
// store.dispatch(incrementByAmount(15));
// store.dispatch(decrementByAmount(80));


// Thunk Middleware
// now first we intilize the state with actual data of user by fetching from DB

// async function getUserData(){
//     const {data} = await axios.get(`http://localhost:3000/user/2`);
//     return {type:INITLIZE_USER,payload:data.amount};
// }

// store.dispatch(getUserData()); // gives error, bcz async funtion written promises
// Actions must be plain objects. Instead, the actual type was: 'Promise'
// now we use thunk
// in thunk two action are called first for fetching data and second for intilizing
// IN THUNK we simple pass the funtion inside dispatch not call, and that funtion
// must take two argument-> first is disptach funtion and second is getState
// inside that funtion we can call that dispatch(actual action)

// THUNK
// async function getUserHelper(dispatch,getState){
//     const {data} = await axios.get(`http://localhost:3000/user/2`);
//     return dispatch(getUserData(data));
// }

// action creator
// function getUserData(user){
//     return {type:INITLIZE_USER,payload:user};
// }

// store.dispatch(getUserHelper);
// here two action called
// 1. action     [AsyncFunction: getUserHelper]
// 2. action     { type: 'INITLIZE_USER', payload: 1000 }

// when we send simply funtion name inside thunk identify that

// adding funtionlity to can intilize user by id
// store.dispatch(getUserHelper); here we need pass id so we used nested funtion one for id send next for THUNK
// we use funtion inside funtion so that Inner funtion can use outer funtion arguement

// function getUserHelperWithID(id){
//     return async  (dispatch,getState)=>{
//         const {data} = await axios.get(`http://localhost:3000/user/${id}`);
//         return dispatch(getUserData(data));
//     }
// }

// store.dispatch(getUserHelperWithID(3));


// Muiltiple Reducer
// like we have two state -> user, blog
// to manage both in single reducer is very complex when updateing any these state
// so we use two reducer to manage both own state 
// Global State is always single so we combine these state by combining reducers in store


// so for this we use seprate file for
// store , reducers, constants, actions,etc

// Store is in this state



// const store= createStore(
//     combineReducers({
//         user:userReducer,
//         blog:blogReducer
//     }),
//     applyMiddleware(thunk.default,logger.default)
// )

// Global state stucture-
// state {
//     user: { name: '', amount: 0 },
//     blog: { name: 'Monu Blog', length: 104000 }
//   }


// store.dispatch(getUserHelperWithID(3));

// let cnt1=1;
// setInterval(()=>{
//     store.dispatch(getUserHelperWithID(cnt1++));
// },5000)

// let cnt2=1;
// setInterval(()=>{
//     store.dispatch(getBlogHelperWithID(cnt2++));
// },5000)

// it gives error when cnt> the user/blog length
// so we can also handle this 
// we can create all actions for 
// fullfilled -> when succes
// rejected -> when error occurs
// pending -> we use this action for to use loading funtionality

// we use fullfiled and rejected in try catch block 
// and call actions according to error comes or not

// in each state we can also use the -> error, and loading
// when success then error is null 
// if error then in error have some error 
// so we can check easily 
// same for loading -> set loading true if in pending otherwise false