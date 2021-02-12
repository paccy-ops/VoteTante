import React from 'react';
import './LoginUser.css';
import { Link } from 'react-router-dom';
const LoginUser = () => {
  return (
    <div className='body'>
      <div className='loginbox'>
        <h1>Login Here</h1>
        <form>
          <p>Last Name</p>

          <input type='text' name='' placeholder='Last Name' />

          <p>ID Number</p>

          <input type='text' name='' placeholder='ID Number' />

          <input type='submit' name='' value='Login' />

          <Link to='/lost'>Lost your password?</Link>
          <br />

          <Link to='/register'>Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
