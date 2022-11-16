import {UserSingInRequest, UserSingInSuccess, UserSingInFail } from '../constants/userSingIn';

export  const SingInReducer=(state={},action)=>{

    switch(action.type){
        case UserSingInRequest:
        return {state}

        case UserSingInSuccess:
        return {users: action.payload}

        case UserSingInFail:
        return {error: action.payload}

        default : 
        return state
    }

}