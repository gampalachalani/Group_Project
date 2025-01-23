import React from 'react'
import './Signup.css'
import cmplogo from '../components/assets/logo1.png';

const Signup : React.FC = () => { 
  return (
    <div className='wrapper'>
      <div className='signup-container'>
      <div className='cmp-logo'>
      <img src={cmplogo} alt='Company Logo' />
        </div>
      <div className='signup-form'>

        <form action=''>

          <h1>Sign Up</h1>
          
          <div className='signup-input'>
            <input type='text'
            placeholder='Enter your first name' required />
          </div>
          <div className='signup-input'>
            <input type='text'
            placeholder='Enter your second name' required />
          </div>
          <div className='signup-input'>
            <input type='email'
            placeholder='Enter your email' required />
          </div>
          <div className='signup-input'>
            <input type='password'
            placeholder='Enter your password' required />
          </div>
          <div className='signup-input'>
            <input type='password'
            placeholder='Confirm your password' required />
          </div>
          
          <button type='submit'>Sign Up</button>

          <div className='signin-link'>
          Already have an account? <a href="/Login">Sign in </a>
          </div>
    
        </form>

      </div> 
      </div> 
    </div>
  )
}

export default Signup;