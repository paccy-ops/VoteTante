import React from 'react';
import './UserList.css';
import { Link } from 'react-router-dom';

import UserItem from './UserItem';
const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className='center'>
        <h1>No users found</h1>
      </div>
    );
  }
  return (
    <div>
      <Link to='/admin'>
        <button className='users-page-button'>BACK</button>
      </Link>
      <ul className='user-list'>
        {users.map((user, index) => (
          <UserItem
            key={index}
            id={user.id}
            name={user.name}
            email={user.email}
            image={user.image}
            address={user.address}
            phoneNumber={user.phoneNumber}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
