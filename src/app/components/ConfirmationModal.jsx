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
  handleToggleModal = () => {
    const {
      name,
      hideModal,
    } = this.props;

    hideModal({ name });
  }

  handleAction = () => {
    const {
      modal,
      handleAction,
    } = this.props;

    handleAction(modal);
  }

  render() {
    const {
      requestState,
      modal,
    } = this.props;

    const isVisibleModal = modal.ui.isVisible && modal.ui.name === 'confirmation';
    const disabledModalBtn = requestState === 'submitting';
    const isRenderAlert = requestState === 'failure';

    return (
      <Modal
        isOpen={isVisibleModal}
        className="pt-5"
        toggle={this.handleToggleModal}
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
            onClick={this.handleAction}
            color="primary"
            disabled={disabledModalBtn}
          >
            Yes
          </Button>
          <Button
            onClick={this.handleToggleModal}
          >
            No
          </Button>
        </ModalFooter>
        <RenderAlert
          isRender={isRenderAlert}
          type="danger"
        />
      </Modal>
    );
  }
}
