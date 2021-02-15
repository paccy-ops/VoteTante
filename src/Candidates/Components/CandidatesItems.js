import React from 'react';
import './CandidatesItem.css';
const CandidatesItems = (props) => {
  return (
    <div className='Accepted-application'>
      <div className='discription'>
        <img src={props.image} alt='' />
        <h4>{props.name}</h4>
        <h3
          style={{
            color: props.approve === true ? '#fcc102' : 'red',
          }}>
          {props.approve === true ? 'Approved' : 'Disapproved'}
        </h3>

        <button>View Profile</button>
      </div>
    </div>
  );
};

export default CandidatesItems;
