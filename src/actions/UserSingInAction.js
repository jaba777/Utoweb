import axios from "axios";
import {UserSingInRequest,UserSingInSuccess,UserSingInFail } from '../constants/userSingIn';


export const userSingInActions=(email,password1) => async(dispatch) => {

    try{

      dispatch({type: UserSingInRequest});
      const config={
        headers:{
            // Accept:'application/json',
            'Content-Type': 'application/json',
            accept: 'application/json',
            // 'X-CSRFToken': csrftoken
        }
      }

      const {data} = await axios.post('http://127.0.0.1:8000/api/token/',
        {
            "email": email,
            "password1": password1,
        }
        ,config
      )

      dispatch({type: UserSingInSuccess, payload: data})

    }catch(error){

        

        dispatch({
            type:UserSingInFail,
            payload: error.response.data.password[0]
        })

      
        
    }

}