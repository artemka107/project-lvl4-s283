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
  handleToggleModal = () => {
    const {
      name,
      hideModal,
    } = this.props;

    hideModal({ name });
  }

  render() {
    const {
      modal, name, children,
    } = this.props;
    const isVisibleModal = modal.ui.isVisible && modal.ui.name === name;

    return (
      <Modal
        isOpen={isVisibleModal}
        className="pt-5"
        toggle={this.handleToggleModal}
      >
        <ModalHeader toggle={this.handleToggleModal} />
        <ModalBody>
          {React.Children.map(children, child => child)}
        </ModalBody>
      </Modal>
    );
  }
}
