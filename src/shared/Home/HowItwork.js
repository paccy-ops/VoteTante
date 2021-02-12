import './HowItwork.css';
import processing from '../../images/processing.svg';
import Resume from '../../images/Resume.svg';
import voting from '../../images/voting.svg';
import { Link } from 'react-router-dom';
const HowItwork = () => {
  return (
    <div className='container'>
      <div className=' how-it-works '>
        <h1>HOW IT WORKS</h1>
        <div>
          <Link to='/register'>
            {' '}
            <img src={processing} alt='' />
          </Link>
          <Link to='/register'>
            {' '}
            <h5>Register</h5>
          </Link>
        </div>
        <div>
          <Link to='/candidates'>
            {' '}
            <img src={Resume} alt='' />
          </Link>
          <Link to='/apply'>
            {' '}
            <h5>Apply for a Job</h5>{' '}
          </Link>
        </div>
        <div>
          <Link to='/cast'>
            {' '}
            <img src={voting} alt='' />
          </Link>
          <Link to='/vote'>
            {' '}
            <h5>Cast your vote</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItwork;
