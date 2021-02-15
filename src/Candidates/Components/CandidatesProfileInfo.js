import React, { useState } from 'react';
import CandidatesProfileItem from './CandidatesProfileItems';
import Modal from '../../shared/UIElements/Model';
import Button from '../../shared/FormElements/Button';
import './CandidatesProfileInfo.css';

const CandidatesProfileInfo = ({ candidates }) => {
  const [showProfile, setShowProfile] = useState(false);
  const openProfileHandler = () => setShowProfile(true);
  const closeProfileHandler = () => setShowProfile(false);
  return (
    <React.Fragment>
      <Modal
        show={showProfile}
        onCancel={closeProfileHandler}
        header={'hahhaha'}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closeProfileHandler}>GO BACK</Button>}>
        <div class='map-container'>
          <h2>This shit</h2>
        </div>
      </Modal>
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
        <button
          className='candidate-approve_button'
          onclick={openProfileHandler}>
          APPROVE
        </button>
        <button className='candidate-cancel_button'>CANCEL</button>
      </div>
    </React.Fragment>
  );
};

export default CandidatesProfileInfo;
