import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';
import './NavDashboard.css';
const NavDashboard = () => {
  return (
    <div className='admin-dashbord'>
      <h4>
        VoteTante Group
        <strong>
          <i className='fas fa-star'></i>
        </strong>
        <br />
        <span>Admin</span>
      </h4>
      <img src={profile} alt='' />
      <ul>
        <li className='active-link'>
          <NavLink to='#'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Approve User</NavLink>
        </li>
        <li>
          <NavLink to='/all/candidates'>Approve Candidates</NavLink>
        </li>
        <li>
          <NavLink to='#'>Create Post </NavLink>
        </li>
        <li>
          <NavLink to='#'>Post Details</NavLink>
        </li>
        <li>
          <NavLink to='#'>Publish Results</NavLink>
        </li>
        <li>
          <NavLink to='#'>Report</NavLink>
        </li>
        <li>
          <NavLink to='#'>All Users</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavDashboard;
