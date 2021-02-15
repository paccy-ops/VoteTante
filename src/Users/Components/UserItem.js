import React, { useState } from 'react';
import './UserItem.css';
import Card from '../../shared/UIElements/Card';
import Avatar from '../../shared/UIElements/Avatar';
import Button from '../../shared/FormElements/Button';
import Modal from './Modal';
// import userProfile from '../Pages/UserProfile';

const UserItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);
  return (
    <React.Fragment>
      <Modal
        show={isOpen}
        header={props.name}
        contentClass='place-item__modal-content'
        sectionClass='place-item__modal-actions'
        section={<Button onClick={closeHandler}>GO BACK</Button>}>
        <div className='user-details'>
          <img src={props.image} alt={props.name} />
          <div className='user-address-names'>
            <p>{props.name}</p>
            <h4>{props.email}</h4>
            <h3>
              {props.address.map((add, index) => (
                <li
                  style={{
                    color: 'darkgreen',
                    fontFamily: 'roboto',
                    fontWeight: 900,
                    listStyle: 'none',
                  }}
                  key={index}>
                  {add}
                </li>
              ))}
            </h3>
            <h6>{props.phoneNumber}</h6>
          </div>
          <Button danger>DELETE</Button>
          <Button inverse>EDIT</Button>
        </div>
      </Modal>
      <li className='user-item'>
        <Card className='user-item__content'>
          <div className='user-item__image'>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className='user-item__info'>
            <h2>{props.name}</h2>
          </div>
          <Button inverse onClick={openHandler}>
            Show
          </Button>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default UserItem;
