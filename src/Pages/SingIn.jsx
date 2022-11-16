import React,{useState} from 'react'

import UseForms from '../ParentsComponents/UseForms';

import {userSingInActions} from '../actions/UserSingInAction';

import { useDispatch, useSelector} from 'react-redux';



const SingIn = () => {

  const dispatch=useDispatch();

  const selector = useSelector(state => state.SingInReducer);

  const {error} = selector;

  const [emailPassword,setEmailPassword]=useState({
    email: '',
    password: '',
  })

  const emailChangeHandler=(event)=>{
    setEmailPassword({
      ...emailPassword,
      email: event.target.value
    })
  }

  const passwordChangeHandler=(event)=>{
    setEmailPassword({
      ...emailPassword,
      password: event.target.value
    })
  }

 


  const SingInHandler=(e)=>{
    e.preventDefault();
    dispatch(userSingInActions(emailPassword.email,emailPassword.password));

    console.log(selector)

    setEmailPassword({
      email: '',
      password: ''
    })

  }


  return (
    <div className='forms-container'>

    <UseForms>
        <div className='starting-learn'>
          <h5>Welcome Back !</h5>
          <p>Sign in to continue to HTB Academy</p>
        </div>

        <form className='forms-singup' onSubmit={SingInHandler}>
        
        <div className="email col">
            <label htmlFor="email">Email: </label>
            <input type="email" id='email' onChange={emailChangeHandler} value={emailPassword.email}/>
        </div>

        <div className="Password col">
            <label htmlFor="Password">Password: </label>
            <input type="password" id='Password' onChange={passwordChangeHandler} value={emailPassword.password}/>
        </div>


        <button type='submit' onClick={SingInHandler}>Login In</button>
        

        </form>
        {error !== null && <p>{error}</p>}

      </UseForms>
      
    </div>
  )
}

export default SingIn
