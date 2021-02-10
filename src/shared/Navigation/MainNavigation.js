import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import NavLink from './NavLinks';
const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandle = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandle = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      <MainHeader>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandle} />}

        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandle}>
          <nav className='main-navigation__drawer-nav'>
            <NavLink />
          </nav>
        </SideDrawer>

        <button
          className='main-navigation__menu-btn'
          onClick={openDrawerHandle}>
          {' '}
          <span />
          <span />
          <span />{' '}
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>Your Name</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLink />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
