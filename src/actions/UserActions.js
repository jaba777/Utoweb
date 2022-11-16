import axios from "axios";
import {UserRegistrationRequest,UserRegistrationSuccess,UserRegistrationFail} from '../constants/userConstants';



export const userRegistration=(email, password1, firstname, lastname, password2)=> async(dispatch)=>{

    try{
        
        dispatch({type: UserRegistrationRequest})
        const config={
            headers:{
                // Accept:'application/json',
                'Content-Type': 'application/json',
                accept: 'application/json',
                // 'X-CSRFToken': csrftoken
            }
        }
        
        const {data}= await axios.post('http://127.0.0.1:8000/register/',
        {
        "first_name": firstname,
        "last_name": lastname,
        "email": email,
        "password1": password1,
        "password2": password2
        }
        ,config

        )

        dispatch({type:UserRegistrationSuccess,payload: data})

    }catch(error){
       
        dispatch({
            type:UserRegistrationFail,
            payload: error.response.data.password1[0]
        })
    }
}


