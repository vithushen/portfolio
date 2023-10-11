import React from 'react';
import './modal.css';

const Modal = ({ title, description, link, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className='Title'>{title}</h2>
        <p>{description}</p>
        <a classname='link' href={link} target="_blank" rel="noopener noreferrer">View Website</a>
      </div>
    </div>
  );
}

export default Modal;