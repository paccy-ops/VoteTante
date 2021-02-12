import React from 'react';
import './UserList.css';
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
    <div class='container'>
      <ul className='user-list'>
        {users.map((user, index) => (
          <UserItem
            key={index}
            id={user.id}
            name={user.name}
            image={user.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
