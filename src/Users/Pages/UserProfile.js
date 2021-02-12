import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfileInfo from '../Components/UserProfileInfo';
const USERS = [
  {
    id: 'p1',
    name: 'Joshua kane',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    address1: 'Baguio Bakakeng',
    address2: 'purok 9',
    postCode: '2600',
    phoneNumber: '09955087385',
    email: 'twagirayesuPacifique@gmail.com',
    creator: 'u3',
  },

  {
    id: 'p1',
    name: 'Twagirayesu Pacifique',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    address1: 'Baguio Bakakeng',
    address2: 'purok 9',
    postCode: '2600',
    phoneNumber: '09955087385',
    email: 'twagirayesuPacifique@gmail.com',
    creator: 'u1',
  },
  {
    id: 'p1',
    name: 'Max mello',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    address1: 'Baguio Bakakeng',
    address2: 'purok 9',
    postCode: '2600',
    phoneNumber: '09955087385',
    email: 'twagirayesuPacifique@gmail.com',
    creator: 'u2',
  },
  {
    id: 'p1',
    name: 'makenze kano',
    image:
      'https://images.unsplash.com/photo-1565238017058-3ece22df3ed2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
    address1: 'Baguio Bakakeng',
    address2: 'purok 9',
    postCode: '2600',
    phoneNumber: '09955087385',
    email: 'twagirayesuPacifique@gmail.com',
    creator: 'u4',
  },
];
const UserProfile = () => {
  const UserId = useParams().userId;
  const loadUsers = USERS.filter((user) => user.creator === UserId);
  return (
    <div>
      <UserProfileInfo users={loadUsers} />
    </div>
  );
};

export default UserProfile;
