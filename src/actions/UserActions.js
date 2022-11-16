import axios from "axios";
import {UserRegistrationRequest,UserRegistrationSuccess,UserRegistrationFail} from '../constants/userConstants';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


export const userRegistration=(email, password1, firstname, lastname, password2)=> async(dispatch)=>{

    try{
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
       
        const csrftoken = getCookie('csrftoken');
        console.log(csrftoken)
        dispatch({type: UserRegistrationRequest})
        const config={
            headers:{
                // Accept:'application/json',
                'Content-type':'application/json;charset=utf-8',
                'X-CSRFToken': csrftoken
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
        console.log(error);
    }
}