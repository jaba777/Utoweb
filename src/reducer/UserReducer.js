import {UserRegistrationRequest,UserRegistrationSuccess,UserRegistrationFail} from '../constants/userConstants';


export const registrationReducer =(state={},action)=>{
    switch(action.type){ 
        case UserRegistrationRequest :
         return {state}

         case UserRegistrationSuccess :
         return {users: action.payload}

         case UserRegistrationFail : 
         return {error: action.payload}

         default: 
         return state
 
    } 
}