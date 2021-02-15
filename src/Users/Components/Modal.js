import React from 'react';
import './Modal.css';
import Backdrop from '../../shared/UIElements/Backdrop';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className} `} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h1>{props.header}</h1>
      </header>
      <form>{props.children}</form>
      <div className={`modal-content ${props.contentClass}`}>{props.forms}</div>
      <section className={`modal__footer ${props.sectionClass}`}>
        {props.section}
      </section>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'>
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
