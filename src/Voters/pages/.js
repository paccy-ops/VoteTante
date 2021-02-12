import React from 'react';
import CandidateList from '../Components/CandidateList';
const Candidates = [
  {
    id: '1',
    name: 'Ben Barry',
    image: 'https://www.harshwal.com/images/remote-business-manager.jpg',
  },
  {
    id: '2',
    name: 'Paco Barry',
    image: 'https://www.harshwal.com/images/remote-business-manager.jpg',
  },
  {
    id: '3',
    name: 'Pacifique Barry',
    image: 'https://www.harshwal.com/images/remote-business-manager.jpg',
  },
];
const VotePage = () => {
  return (
    <div className='center'>
      <CandidateList candidates={Candidates} />
    </div>
  );
};

export default VotePage;
