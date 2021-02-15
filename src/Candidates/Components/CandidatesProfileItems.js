import React from 'react';
import './CandidatesProfileItems.css';
const CandidatesProfileItems = (props) => {
  return (
    <div className='profile-details'>
      <img src={props.image} alt={props.name} />
      <div className='address-names'>
        <p>
          Name:
          <span
            style={{
              marginLeft: 10,
              color: '#403D56',
              fontFamily: 'sans-serif',
              fontWeight: 900,
            }}>
            {props.name}
          </span>
        </p>
        <ul>
          Address:
          {props.address.map((add, index) => (
            <li
              style={{ color: '#363', fontFamily: 'Roboto', fontWeight: 900 }}
              key={index}>
              {add}
            </li>
          ))}
        </ul>
        <ul>
          Applied for:
          {props.application.map((p, index) => (
            <li
              style={{
                color: 'green',
                fontWeight: 900,
              }}
              key={index}>
              {p}
            </li>
          ))}
        </ul>
        <h3>
          <discription
            style={{
              color: 'green',
              margin: '0 10px 0 0',
            }}
          />
          {props.discription}
          {console.log(props.discription.length)}
        </h3>
        <h6>
          {' '}
          Exam:
          <span
            style={{
              color: props.exam === true ? '#fcc102' : 'red',
              margin: '20px',
              fontSize: 18,
            }}>
            {props.exam === true ? 'PASS' : 'FAILED'}
          </span>{' '}
        </h6>
      </div>
    </div>
  );
};

export default CandidatesProfileItems;
