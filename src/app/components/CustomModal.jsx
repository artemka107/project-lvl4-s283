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

@connect(mapStateToProps)
export default class CustomModal extends React.Component {
  render() {
    const {
      modal, name, hideModal, children,
    } = this.props;
    return (
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
  }
}
