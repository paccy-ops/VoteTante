import React from 'react';

const ProfileDetails = (props) => {
  return (
    <div className='users-details'>
      <img src={props.image} alt={props.name} />
      <div className='users-address-names'>
        <p>{props.name}</p>
        <h4>{props.email}</h4>
        <h3>{props.address1}</h3>
      </div>
    </div>
  );
};
export default ProfileDetails;
