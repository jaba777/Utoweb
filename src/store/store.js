import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { registrationReducer } from '../reducer/UserReducer';
import darkModeReducer from './darkModeReducer';
import {SingInReducer} from '../reducer/UserSingInReducer';


const reducer=combineReducers({
    registrationReducer: registrationReducer,
    SingInReducer: SingInReducer,
    darkModeReducer: darkModeReducer
})


const initialState={};

const middleWare=[thunk];


const store=createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;