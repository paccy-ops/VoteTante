import React from 'react';
import './CandidatesItem.css';
import { Link } from 'react-router-dom';
const CandidatesItems = (props) => {
  return (
    <div className='Accepted-application'>
      <Link to={`/${props.id}/candidate/profile`}>
        <div className='discription'>
          <img src={props.image} alt='' />
          <h4>{props.name}</h4>
          <h3
            style={{
              color: props.approve === true ? '#fcc102' : 'red',
            }}>
            {props.approve === true ? 'Approved' : 'Disapproved'}
          </h3>
          <Link to={`/${props.id}/candidate/profile`}>
            <button>View Profile</button>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default CandidatesItems;
