import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
    const [isOpen, setisOpen] = useState(true);

    const closeModal = () => {
        setisOpen(false);
    }

    return (
        <Modal
          isOpen={isOpen}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
          className="modal"
          overlayClassName="modal-background"
        >
            <h2>Hello world</h2>
            <hr />
            <span>hi again</span>
        </Modal>
    )
}
