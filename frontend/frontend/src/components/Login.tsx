import React from 'react'
import './Login.css'

const Login : React.FC = () => { 
  return (
    <div className='Login'>
      <div className='form-box login'>

        <form action=''>

          <h1>Sign In</h1>
          <div className='input-box'>
            <input type='text'
            placeholder='Username' required />
          </div>
          <div className='input-box'>
            <input type='password'
            placeholder='Password' required />
          </div>

          <div className='remember-forgot'>
            <label><input type='checkbox'/>Remeber me  </label>
            <a href='#'> Forgot password</a>
          </div>

          <button type='submit'>Sign In</button>

          <div className='registr-link'>
            <p>Don't have an account?  <a href="/signup">Signup</a></p>
          </div>
        </form>

      </div>  
    </div>
  )
}

export default Login;