import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import connect from '../connect';
import RenderAlert from './RenderAlert';

const mapStateToProps = (state) => {
  const props = {
    modal: state.modal,
    hideModal: state.hideModal,
  };
  return props;
};

@connect(mapStateToProps)
export default class ConfirmationModal extends React.Component {
  render() {
    const {
      name,
      handleAction,
      requestState,
      modal,
      hideModal,
    } = this.props;

    return (
      <Modal
        isOpen={modal.ui.isVisible && modal.ui.name === 'confirmation'}
        className="pt-5"
        toggle={() => hideModal({ name })}
        centered
        size="sm"
      >
        <ModalHeader
          className="justify-content-center"
        >
          Are you sure?
        </ModalHeader>
        <ModalFooter
          className="justify-content-center"
        >
          <Button
            onClick={() => handleAction(modal)}
            color="primary"
            disabled={requestState === 'submitting'}
          >
            Yes
          </Button>
          <Button
            onClick={() => hideModal({ name })}
          >
            No
          </Button>
        </ModalFooter>
        <RenderAlert
          isRender={requestState === 'failure'}
          type="danger"
        />
      </Modal>
    );
  }
}
