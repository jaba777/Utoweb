import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseForms from '../UseForms';
import './SingUp.css';
import { formSubmitSlice } from '../store/useForm';

const SingUp = () => {

  const dispatch= useDispatch();

  const selector = useSelector(state=> state.formsSubmit);

  const [changeInputs, setChangeInputs]= useState({
    name: '',
    surname: '',
    email: '',
    password: ''
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


 
  const onSubmitHandler=(event)=>{
    event.preventDefault();

    if(changeInputs.name.trim() === '' || 
    changeInputs.surname.trim() === '' || 
    changeInputs.email.trim() === '' || 
    changeInputs.password.trim()===''){
      return;
    }

    dispatch(formSubmitSlice.addFormHandler({
                id: Math.random(),
                name: changeInputs.name,
                surname: changeInputs.surname,
                email: changeInputs.email,
                password: changeInputs.password
    }));


    console.log(selector)

    setChangeInputs({
      name: '',
      surname: '',
      email: '',
      password: ''
    })

  }


  return (
    <>
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
            <label htmlFor="fullName">FullName: </label>
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


        <button type='submit' onClick={onSubmitHandler}>Submit</button>


      

        </form>

      </UseForms>
    </>
  )
}

export default SingUp
