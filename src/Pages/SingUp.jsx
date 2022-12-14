import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseForms from '../ParentsComponents/UseForms';
import './SingUp.css';
import { useNavigate } from 'react-router-dom';
import {userRegistration} from '../actions/UserActions';


const SingUp = () => {

  const nav = useNavigate();

  const dispatch= useDispatch();

  const selector = useSelector(state=>state.registrationReducer);

  const {error,users}= selector;

  const [confirmPass,setConfirmPass]=useState(null);

  const [changeInputs, setChangeInputs]= useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPass: ''
  });

  const nameChangeHandler=(event)=>{
    setChangeInputs({
      ...changeInputs,
      name: event.target.value
    });
  }

  
  const surNameChangeHandler=(event)=>{
    setChangeInputs({
      ...changeInputs,
      surname: event.target.value
    });
  }

  const emailChangeHandler=(event)=>{
    setChangeInputs({
      ...changeInputs,
      email: event.target.value
    });
  }

  
  const passwordChangeHandler=(event)=>{
    setChangeInputs({
      ...changeInputs,
      password: event.target.value
    });
  }

  const confirmPasswordChangeHandler=(event)=>{
    setChangeInputs({
      ...changeInputs,
      confirmPass: event.target.value
    });
  }




 
  const onSubmitHandler=(event)=>{
    event.preventDefault();

    if(changeInputs.name.trim() === '' || 
    changeInputs.surname.trim() === '' || 
    changeInputs.email.trim() === '' || 
    changeInputs.password.trim()==='' || 
    changeInputs.confirmPass.trim() === ''){
      return;
    }



    if(changeInputs.confirmPass !== changeInputs.password){
      return setConfirmPass(<p>please confirm password Correctly!</p>)
    } else{
      setConfirmPass(null);
    }

    

    dispatch(userRegistration(changeInputs.email,changeInputs.password,changeInputs.name,changeInputs.surname,changeInputs.confirmPass));


    
    


    //nav('/sing-in');

    

    setChangeInputs({
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPass: ''
    })

  }


  return (
    <div className='forms-container'>
      <UseForms>
        <div className='starting-learn'>
          <h5>Register</h5>
          <p>Start your learning journey!</p>
        </div>
        <form onSubmit={onSubmitHandler} className='forms-singup'>

        <div className="name col">
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' onChange={nameChangeHandler} value={changeInputs.name}/>
        </div>

        <div className="fullname col">
            <label htmlFor="fullName">lastName: </label>
            <input type="text" id='fullName' onChange={surNameChangeHandler} value={changeInputs.surname}/>
        </div>

        
        <div className="email col">
            <label htmlFor="email">Email: </label>
            <input type="email" id='email' onChange={emailChangeHandler} value={changeInputs.email}/>
        </div>

        <div className="Password col">
            <label htmlFor="Password">Password: </label>
            <input type="password" id='Password' onChange={passwordChangeHandler}value={changeInputs.password} />
        </div>

        <div className="confirm-Password col">
            <label htmlFor="confirm-Password">Password: </label>
            <input type="password" id='confirm-Password' onChange={confirmPasswordChangeHandler}value={changeInputs.confirmPass} />
        </div>
        {confirmPass}

        <button type='submit' onClick={onSubmitHandler}>Submit</button>
        

        </form>

        {
          error !== null && <p className='error-text'>{error}</p>
        }

      </UseForms>
    </div>
  )
}

export default SingUp
