import React, { useState } from 'react';
import profile from '../../images/profile.svg';
import Button from '../../shared/FormElements/Button';
import { Link } from 'react-router-dom';
import Modal from '../../Users/Components/Modal';
import NewPost from '../../PostToApply/pages/NewPost';
import './NavDashboard.css';
const NavDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);
  const handlerSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <Modal
        show={isOpen}
        header={'Create Post'}
        contentClass='place-item__modal-content'
        sectionClass='place-item__modal-actions'
        section={
          <Button sectionClass='new-modal-botton' onClick={closeHandler}>
            CANCEL
          </Button>
        }>
        <form onSubmit={handlerSubmit}>
          <NewPost />
        </form>
      </Modal>

      <div className='admin-dashbord'>
        <h4>
          VoteTante Group
          <strong>
            <i className='fas fa-star'></i>
          </strong>
          <br />
          <span>Admin</span>
        </h4>
        <img src={profile} alt='' />

        <Link to='/admin'>
          <button>Dashboard</button>
        </Link>
        <Link to='/users'>
          <button> All User</button>
        </Link>
        <Link to='/all/candidates'>
          <button>Approve Candidates</button>
        </Link>

        <button onClick={openHandler}>Create Post</button>
        <button>Report</button>
      </div>
    </React.Fragment>
  );
};

export default NavDashboard;
