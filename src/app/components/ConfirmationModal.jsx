import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import RenderAlert from './RenderAlert';


const ConfirmationModal = ({
  modal,
  hideModal,
  handleAction,
  requestState,
}) => (
  <Modal
    isOpen={modal.isVisible && modal.name === 'confirmation'}
    className="pt-5"
    toggle={hideModal}
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
        onClick={handleAction}
        color="primary"
        disabled={requestState.submitting}
      >
        Yes
      </Button>
      <Button
        onClick={hideModal}
      >
        No
      </Button>
    </ModalFooter>
    <RenderAlert
      isRender={requestState.failure}
      type="danger"
    />
  </Modal>
);

export default ConfirmationModal;
