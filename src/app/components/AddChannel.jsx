import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import connect from '../connect';
import FormModal from './FormModal';

const mapStateToProps = ({
  createChannel, showModal, hideModal, modal,
}) => {
  const props = {
    createChannel,
    showModal,
    hideModal,
    modal,
  };
  return props;
};

const AddChannel = ({
  createChannel, showModal, hideModal, modal,
}) => {
  const currentModalName = 'addChannel';
  const { isVisible, name } = modal;
  const isShow = isVisible && name === currentModalName;

  return (
    <div className="mt-3">
      <Button
        onClick={() => showModal({ name: currentModalName })}
      >
        Add +
      </Button>
      <FormModal
        label="Channel name"
        buttonText="Add channel"
        hideModal={() => hideModal({ name: currentModalName })}
        isShow={isShow}
        handleAction={({ text }) => createChannel({ name: text })}
      />
    </div>
  );
};

export default connect(mapStateToProps)(AddChannel);
