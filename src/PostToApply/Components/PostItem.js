import { Link } from 'react-router-dom';
import './PostItem.css';
const PostItem = (props) => {
  const paco = () => {
    console.log(props.title);
  };
  return (
    <div className='posts'>
      <Link>
        <div className='discription'>
          <img src={props.image} alt='' />
          <h4 onClick={paco}>{props.title}</h4>
          <h6>
            {' '}
            {props.application === 1 ? 'Application' : 'Applications'} :
            <span
              style={{ color: props.application === 10 ? '#fcc102' : 'green' }}>
              {props.application}
            </span>
          </h6>
          <h6>
            Post:
            {
              <span
                style={{ color: props.application === 10 ? 'red' : '#fcc102' }}>
                {props.application === 10 ? 'Closed' : 'open'}
              </span>
            }
          </h6>
          <p>{props.discription.slice(0, 60)}</p>
          <Link to='/'>
            <button>More info</button>
          </Link>
          <Link to='/apply'>
            {' '}
            <button className='apply'>Apply</button>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
