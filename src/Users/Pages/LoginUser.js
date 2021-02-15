import React from 'react';
import Button from '../../shared/FormElements/Button';
import './LoginUser.css';
import { Link } from 'react-router-dom';
const LoginUser = () => {
  return (
    <div className='body'>
      <div className='loginbox'>
        <h1>Login Here</h1>
        <form>
          <p>Last Name</p>

          <input type='text' placeholder='Last Name' />

          <p>ID Number</p>

          <input type='text' placeholder='ID Number' />

          <Button onClick={(e) => e.preventDefault()}>Login</Button>

          <Link to='/lost'>Lost your password?</Link>

          <Link to='/register'>Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
