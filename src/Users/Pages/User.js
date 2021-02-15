import React from 'react';
// import { useParams } from 'react-router-dom';
import UserList from '../Components/UserList';
const USERS = [
  {
    id: 'u1',
    name: 'Twagirayesu Pacifique',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    address: ['Baguio Bakakeng', 'purok 9', '2600'],
    phoneNumber: '09955087385',
    email: 'twagirayesuPacifique@gmail.com',
  },
  {
    id: 'u2',
    name: 'Max mello',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    address: ['Baguio Bakakeng', 'purok 9', '2600'],
    phoneNumber: '09955087385',
    email: 'twagirayesuPacifique@gmail.com',
  },
  {
    id: 'u3',
    name: 'Joshua kane',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    address: ['Baguio Bakakeng', 'purok 9', '2600'],
    phoneNumber: '09955087385',
    email: 'twagirayesuPacifique@gmail.com',
  },
  {
    id: 'u4',
    name: 'makenze kano',
    image:
      'https://images.unsplash.com/photo-1565238017058-3ece22df3ed2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
    address: ['Baguio Bakakeng', 'purok 9', '2600'],
    phoneNumber: '09955087385',
    email: 'twagirayesuPacifique@gmail.com',
  },
];
const User = () => {
  return (
    <div>
      <UserList users={USERS} />
    </div>
  );
};

export default User;
