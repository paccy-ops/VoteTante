import logo from '../../images/tante-01.svg';
import './Footer.css';
import { Link } from 'react-router-dom';
const Team = () => {
  return (
    <footer>
      <div className='about'>
        {' '}
        <h3>
          <img className='footer-image' src={logo} alt='logo' />
          <strong>About VoteTante </strong>
        </h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Etiam porta sem
          malesuada magna mollis euismod. Maecenas faucibus mollis interdum.
        </p>
        <Link to='/login'>
          <button>Get Started</button>
        </Link>
        <h4>Download App</h4>
        <div className='app-download'>
          <i className='fab fa-app-store-ios'></i>
          <i className='fab fa-android'></i>
        </div>
        <h3>
          <strong>FOLLOW US</strong>
        </h3>
        <div className='follow'>
          <i className='fab fa-facebook-square'></i>
          <i className='fab fa-instagram'></i>
          <i className='fab fa-twitter-square'></i>
          <i className='fab fa-google-plus'></i>
          <i className='fab fa-youtube'></i>
        </div>
      </div>
      <div className='link'>
        {' '}
        <h3>
          <strong>QUICK LINKS </strong>
        </h3>
        <h5>
          <Link to='/ffoo'>About Us</Link>
        </h5>
        <h5>
          <Link to='/fff'>Service </Link>
        </h5>
        <h5>
          <Link to='/'>Home </Link>
        </h5>
      </div>

      <p className='fo'>Software Design Class Group &#64;2021</p>
    </footer>
  );
};

export default Team;
