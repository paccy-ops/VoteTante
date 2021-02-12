import React from 'react';
import CandidatesProfileItem from './CandidatesProfileItems';
import './CandidatesProfileInfo.css';
const CandidatesProfileInfo = ({ candidates }) => {
  return (
    <div className='profilo-page'>
      {candidates.map((candidate, index) => (
        <CandidatesProfileItem
          key={index}
          id={candidate.id}
          name={candidate.name}
          address={candidate.address}
          image={candidate.image}
          discription={candidate.discription}
          exam={candidate.exam}
          application={candidate.application}
        />
      ))}
      <button className='candidate-approve_button'>APPROVE</button>
      <button className='candidate-cancel_button'>CANCEL</button>
    </div>
  );
};

export default CandidatesProfileInfo;
