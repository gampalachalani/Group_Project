import React from 'react'

const Login : React.FC = () => { 
  return (
    <div className='wrapper'>
      <div className='form-box login'>

        <form action=''>

          <h1>Login</h1>
          <div className='input-box'>
            <input type='text'
            placeholder='Username' required />
          </div>
          <div className='input-box'>
            <input type='password'
            placeholder='Password' required />
          </div>

          <div className='remember-forgot'>
            <label><input type='checkbox'/>Remeber me</label>
            <a href='#'>Forgot password</a>
          </div>

          <button type='submit'>Login</button>

          <div className='registr-link'>
            <p>Don't have an account? <a href='#'>Signup</a></p>
          </div>
        </form>

      </div>  
    </div>
  )
}

export default Login;