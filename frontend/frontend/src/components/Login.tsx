import React from 'react'
import './Login.css'
import cmplogo from '../components/assets/logo1.png';

const Login : React.FC = () => { 
  return (
    <div className='Login'>
      <div className='form-container'>
      <div className='cmp-logo'>
    <img src={cmplogo} alt='Company Logo' />
  </div>
      <div className='form-box login'>

        <form action=''>

          <h1>Sign In</h1>
          <div className='input-box'>
            <input type='email'
            placeholder='Enter your Email' required />
          </div>
          <div className='input-box'>
            <input type='password'
            placeholder='Enter your Password' required />
          </div>

          <div className='remember-forgot'>
            <label><input type='checkbox'/>Remeber me  </label>
            <a href='/forgotpassword'> Forgot password</a>
          </div>

          <button type='submit'>Sign In</button>

          <div className='registr-link'>
            <p>Don't have an account?  <a href="/signup">Signup</a></p>
          </div>
        </form>

      </div>
      </div>  
    </div>
  )
}

export default Login;