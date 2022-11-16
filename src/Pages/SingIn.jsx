import React from 'react'

import UseForms from '../ParentsComponents/UseForms';



const SingIn = () => {
  return (
    <>

<UseForms>
        <div className='starting-learn'>
          <h5>Welcome Back !</h5>
          <p>Sign in to continue to HTB Academy</p>
        </div>
        <form className='forms-singup'>
        
        <div className="email col">
            <label htmlFor="email">Email: </label>
            <input type="email" id='email'/>
        </div>

        <div className="Password col">
            <label htmlFor="Password">Password: </label>
            <input type="password" id='Password'/>
        </div>


        <button type='submit'>Login In</button>
        

        </form>

      </UseForms>
      
    </>
  )
}

export default SingIn
