import { Link } from 'react-router-dom';
import './PostItem.css';
const PostItem = (props) => {
  return (
    <div className='Accepted-application'>
      <Link>
        <div className='discription'>
          <img src={props.image} alt='' />
          <h4>{props.firstname}</h4>
          <br />
          <h4>{props.lastname}</h4>
          <h6>
            Position:
            <span>{props.position}</span>
          </h6>

          <Link to='/apply'>
            <button>View Profile</button>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
