import React from 'react';
import Checkbox from '@material-ui/core/CheckBox';

import './VotingPostPage.css';
const VotingPostPage = (props) => {
  console.log(props.post);
  return (
    <div className='cast-vote'>
      <select>
        <option>Select</option>
        <option>{props.post}</option>
      </select>
      <div>
        <h1>
          {props.candidate.map((item, index) => (
            <li
              style={{
                color: '#444',
                textDecoration: 'none',
              }}
              key={index}>
              {item} <Checkbox />
            </li>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default VotingPostPage;
