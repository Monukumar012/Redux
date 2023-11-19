import {createStore,applyMiddleware,combineReducers} from 'redux';
import { channelReducer, videoReducer } from './reducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    videos:videoReducer,
    channel:channelReducer
}) 

const initialState={};
const store = createStore(reducers,initialState,applyMiddleware(thunk))

export default store;