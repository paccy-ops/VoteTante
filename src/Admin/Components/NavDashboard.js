import { Link } from 'react-router-dom';
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
          <Link to='#'>Dashboard</Link>
        </li>
        <li>
          <Link to='#'>Approve User</Link>
        </li>
        <li>
          <Link to='#'>Approve Candidates</Link>
        </li>
        <li>
          <Link to='#'>Create Post </Link>
        </li>
        <li>
          <Link to='#'>Post Details</Link>
        </li>
        <li>
          <Link to='#'>Publish Results</Link>
        </li>
        <li>
          <Link to='#'>Report</Link>
        </li>
        <li>
          <Link to='#'>All Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDashboard;
