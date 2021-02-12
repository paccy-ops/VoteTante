import React from 'react';
import './ProfileDetails.css';
import Contact from '@material-ui/icons/ContactMail';
import Name from '@material-ui/icons/Contacts';
import Address from '@material-ui/icons/Place';
import Phone from '@material-ui/icons/Phone';

import Button from '@material-ui/core/Button';

const ProfileDetails = (props) => {
  return (
    <div className='user-details'>
      <img src={props.image} alt={props.name} />
      <div className='user-address-names'>
        <p>
          <Name
            style={{
              color: 'green',
              margin: '0 10px 0 0',
            }}
          />
          {props.name}
        </p>
        <h4>
          <Contact
            style={{
              color: 'green',
              margin: '0 10px 0 0',
            }}
          />
          {props.email}
        </h4>
        <h3>
          <Address
            style={{
              color: 'green',
              margin: '0 10px 0 0',
            }}
          />
          {props.address1}
        </h3>
        <h4>
          <Address
            style={{
              color: 'green',
              margin: '0 10px 0 0',
            }}
          />
          {props.address2}
        </h4>
        <h5>
          <Address
            style={{
              color: 'green',
              margin: '0 10px 0 0',
            }}
          />
          {props.postCode}
        </h5>
        <h6>
          <Phone
            style={{
              color: 'green',
              margin: '0 10px 0 0',
            }}
          />
          {props.phoneNumber}
        </h6>
      </div>
    </div>
  );
};
export default ProfileDetails;
