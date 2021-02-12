import React from 'react';
import ProfileDetails from './ProfileDetails';
import Button from '@material-ui/core/Button';

import './UserProfileInfo.css';
const UserProfileInfo = ({ users }) => {
  return (
    <div className='profilo-page'>
      {users.map((user, index) => (
        <ProfileDetails
          key={index}
          id={user.id}
          name={user.name}
          image={user.image}
          address1={user.address1}
          address2={user.address2}
          postCode={user.postCode}
          phoneNumber={user.phoneNumber}
          email={user.email}
        />
      ))}
      <Button
        style={{
          color: '#ffff',
          padding: '0 10px',
          fontSize: 20,
          marginLeft: '20%',
          marginTop: '50px',
          backgroundColor: 'green',
        }}>
        Save
      </Button>
      <Button
        style={{
          color: '#FCC511',
          padding: '0 10px',
          fontSize: 20,
          marginLeft: '10px',
          backgroundColor: '#444',
          marginTop: '50px',
        }}>
        EDIT
      </Button>
    </div>
  );
};

export default UserProfileInfo;
