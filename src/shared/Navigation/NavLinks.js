import React from 'react';
import logo from '../../images/tante-01.svg';
import profile from '../../images/paco.jpg';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/'>
          <img className='logo' src={logo} alt='logo' />
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin' className='color-active'>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to='/' exact className='color-active'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/candidates' className='color-active'>
          Candidates
        </NavLink>
      </li>
      <li>
        <NavLink to='/cast' className='color-active'>
          Voters
        </NavLink>
      </li>

      <li>
        <NavLink to='/login' className='color-active'>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to='/register' className='color-active'>
          Register
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink to='/u3/users'>
          <img className='image-profile' src={profile} alt='profile' />
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
