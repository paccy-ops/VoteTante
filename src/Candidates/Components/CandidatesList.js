import React from 'react';
import CandidatesItem from './CandidatesItems';
import './CandidatesList.css';
const CandidatesList = ({ candidates }) => {
  if (candidates.length === 0) {
    return (
      <div className='apllication-center'>
        <h1>No Application to show </h1>
      </div>
    );
  }
  return (
    <div className='application-active'>
      <h1>Accapted Application </h1>
      <ul className='application-list'>
        {candidates.map((post, index) => (
          <CandidatesItem
            key={index}
            id={post.id}
            image={post.image}
            name={post.name}
            approve={post.approve}
          />
        ))}
      </ul>
    </div>
  );
};

export default CandidatesList;
