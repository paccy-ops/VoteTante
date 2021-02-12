import React from 'react';
import './newCandidates.css';
const NewCandidates = () => {
  return (
    <div className='apply-form'>
      <h1>Apply here</h1>
      <div class='select-post'>
        <h2>APPLICANT NAME</h2>
        <h4>pacifique Twagirayesu</h4>
        <h2>APPLICANT EMAIL ADDRESS</h2>
        <h4>pacifiquetwagirayesu@gmail.com</h4>
        <h5>Post</h5>
        <select>
          <option value=''>Select</option>
          <option value=''>Manager</option>
          <option value=''>President</option>
          <option value=''>Ass.Director</option>
          <option value=''>Director</option>
        </select>
      </div>
      <label className='apply-label' htmlFor=''>
        {' '}
        UPLOAD YOUR CV
      </label>
      <input type='file' />
      <label className='apply-label' htmlFor=''>
        Message
      </label>
      <textarea cols='30' rows='10'></textarea>
      <button>Submit</button>
    </div>
  );
};

export default NewCandidates;
