import React from 'react'

const Signup : React.FC = () => { 
  return (
    <div className='wrapper'>
      <div className='form-box login'>

        <form action=''>

          <h1>Sign Up</h1>
          <div className='input-box'>
            <input type='email'
            placeholder='Email' required />
          </div>
          <div className='input-box'>
            <input type='text'
            placeholder='Username' required />
          </div>
          <div className='input-box'>
            <input type='password'
            placeholder='Password' required />
          </div>
          
          <button type='submit'>Sign Up</button>

          <div className='signin-link'>
          Already have an account? <a href="/Login">Sign in </a>
          </div>
    
        </form>

      </div>  
    </div>
  )
}

export default Signup;