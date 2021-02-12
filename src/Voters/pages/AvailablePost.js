import React from 'react';
import VotingCandidatesList from '../Components/VotingCandidatesList';
const AVAILABLEPOST = [
  {
    id: '98',
    post: 'Manager',
    candidates: ['Pacifique', 'Twagirayesu Pacifique', 'Pacifique Twagirayesu'],
  },
  {
    id: '98',
    post: 'President',
    candidates: ['Paci', 'kera', 'uwo'],
  },

  {
    id: '98',
    post: 'President',
    candidates: ['Paci', 'kera', 'uwo'],
  },
];
const AvailableCandidates = () => {
  return (
    <div>
      <VotingCandidatesList availableCandidates={AVAILABLEPOST} />
    </div>
  );
};

export default AvailableCandidates;
