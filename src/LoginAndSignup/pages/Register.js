// import { Link } from 'react-router-dom';
// import back from '../../images/gunnar.jpg';
import { Link } from 'react-router-dom';
import './Register.css';
const Login = () => {
  return (
    <div>
      <div className='container'>
        <form id='form' className='form'>
          <h2>
            Register with us
            <Link to='/login'>Already have an Account?</Link>
          </h2>
          <div className='right'>
            <div className='form-control'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                placeholder='Enter First Name'
              />
              <small>Error message</small>
            </div>
            <div className='form-control'>
              <label Htmlfor='LastName'>Last Name</label>
              <input type='text' id='LastName' placeholder='Enter Last Name' />
              <small>Error message</small>
            </div>
            <div className='form-control'>
              <label Htmlfor='city/province'>City/Province</label>
              <input
                type='text'
                id='city/province'
                placeholder='City/Province'
              />
              <small>Error message</small>
            </div>
            <div className='form-control'>
              <label Htmlfor='postcode'>Post Code</label>
              <input type='text' id='postcode' placeholder='Enter Post Code' />
              <small>Error message</small>
            </div>
          </div>

          <div className='right'>
            <div className='form-control'>
              <label Htmlfor='address'>Address 1</label>
              <input type='text' id='address' placeholder='Enter Address 1' />
              <small>Error message</small>
            </div>
            <div className='form-control'>
              <label Htmlfor='address'>Address 2</label>
              <input type='text' id='address' placeholder='Enter Address 2' />
              <small>Error message</small>
            </div>
            <div className='form-control'>
              <label Htmlfor='phone'>Phone Number</label>
              <input
                type='phone'
                id='phone'
                placeholder='Enter Phone Number '
              />
              <small>Error message</small>
            </div>
            <div className='form-control'>
              <label Htmlfor='email'>Email</label>
              <input type='email' id='email' placeholder='Enter Email ' />
              <small>Error message</small>
            </div>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
