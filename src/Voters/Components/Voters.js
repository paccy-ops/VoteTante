import './Voters.css';
import home from '../../images/vote2.png';
import cover from '../../images/gunnar.jpg';
import leftcover from '../../images/ele.svg';
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
      className='howtoVoters'>
      <section>
        <h3>
          Why you should use <br /> VoteTante?
        </h3>
        <div className='pad-imagehomeVoters'>
          <div>
            <img src={leftcover} alt='' />
          </div>
          <div>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Maecenas sed diam eget risus varius blandit sit amet non
              magna. Aenean lacinia bibendum nulla sed consectetur. <br />
              <Link to='/vote'>
                <button className='register'>Vote Now</button>
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
