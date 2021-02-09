import './Header.css';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.svg';
import logo from '../../images/tante-01.svg';
const Header = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        {' '}
        <img className='logo' src={logo} alt='logo' />
      </Link>
      <h1>
        <Link to='/'>
          {' '}
          VoteTante <span>.</span>
        </Link>
      </h1>

      <ul>
        <li>
          <Link to='/admin'>Dashboard</Link>
        </li>
        <li>
          <Link to='/' exact>
            Home
          </Link>
        </li>
        <li>
          <Link to='/candidates'>For Candidates</Link>
        </li>
        <li>
          <Link to='/cast'>For Votes</Link>
        </li>

        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
      <img className='image-profile' src={profile} alt='profile' />
    </nav>
  );
};

export default Header;
