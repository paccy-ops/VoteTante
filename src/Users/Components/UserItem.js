import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css';
const UserItem = (props) => {
  return (
    <div className='user-item'>
      <Link to={`/${props.id}/profile`}>
        <img src={props.image} alt='' />
        <h2>{props.name}</h2>
      </Link>
    </div>
  );
};

export default UserItem;
