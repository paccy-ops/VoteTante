import React from 'react';
import './VotingCandidatesLis.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import VotingPostPage from './VotingPostPage';
const VotingCandidatesList = ({ availableCandidates }) => {
  return (
    <div className='votingPot'>
      <h1>Cast your vote</h1>
      <div className='cast-center'>
        {availableCandidates.map((item, index) => (
          <VotingPostPage
            key={index}
            id={item.id}
            post={item.post}
            candidate={item.candidates}
          />
        ))}
      </div>
      <button className='candidate-approve_button'>Save your vote</button>
    </div>
  );
};

export default VotingCandidatesList;
