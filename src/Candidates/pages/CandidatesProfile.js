import React from 'react';
import { useParams } from 'react-router-dom';
import CandidatesProfileInfo from '../Components/CandidatesProfileInfo';
const APPLIED = [
  {
    id: 'p1',
    name: 'Pacifique Twagiarayesu',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    address: ['Baguio Bakakeng', 'purok 9', '2600'],
    application: ['Manager', 'President'],
    discription:
      'Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
    exam: true,
    creator: 'u1',
  },
  {
    id: 'p2',
    name: 'Muneza Jack',
    image:
      'https://www.eharmony.co.uk/dating-advice/wp-content/uploads/2011/04/profilephotos.jpg',
    address: ['Baguio Bakakeng', 'purok 9', '2600'],
    application: ['Manager', 'President'],
    discription:
      'Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
    exam: false,
    creator: 'u2',
  },
];
const CandidatesProfile = () => {
  const UserId = useParams().UserId;
  const loadApplied = APPLIED.filter(
    (applicant) => applicant.creator === UserId
  );
  return (
    <div>
      <CandidatesProfileInfo candidates={loadApplied} />
    </div>
  );
};

export default CandidatesProfile;
