import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    modal: state.modal,
    hideModal: state.hideModal,
  };
  return props;
};

const CustomModal = ({
  modal, name, hideModal, children,
}) => (
  <Modal
    isOpen={modal.ui.isVisible && modal.ui.name === name}
    className="pt-5"
    toggle={() => hideModal({ name })}
  >
    <ModalHeader toggle={() => hideModal({ name })} />
    <ModalBody>
      {React.Children.map(children, child => child)}
    </ModalBody>
  </Modal>
);

export default connect(mapStateToProps)(CustomModal);
