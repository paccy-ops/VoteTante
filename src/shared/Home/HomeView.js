import './HomeView.css';
import home from '../../images/vote2.png';
import cover from '../../images/gunnar.jpg';
import leftcover from '../../images/account.svg';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
      className='howtohome'>
      <section>
        <h3>
          Why you should use <br /> VoteTante?
        </h3>
        <div className='pad-imagehome'>
          <div>
            <img src={leftcover} alt='' />
          </div>
          <div>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Maecenas sed diam eget risus varius blandit sit amet non
              magna. Aenean lacinia bibendum nulla sed consectetur. Cras mattis
              consectetur purus sit amet fermentum. Donec ullamcorper nulla non
              metus auctor fringilla. Cras mattis <br />
              <Link to='/register'>
                <button className='register'>Register Now</button>
              </Link>
            </p>
          </div>
        </div>

        <img className='cover' src={home} alt='' />
      </section>
    </div>
  );
};

export default HomeView;
