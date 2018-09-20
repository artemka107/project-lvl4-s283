import React from 'react';
import {
  Button, Modal, FormGroup, ModalHeader, ModalBody,
} from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import FieldInput from './FieldInput';
import RenderAlert from './RenderAlert';
import * as actions from '../actions';


const FormModal = ({
  isShow,
  hideModal,
  handleAction,
  buttonText,
  submitting,
  label,
  handleSubmit,
  submitFailed,
}) => (
  <Modal
    isOpen={isShow}
    className="pt-5"
    toggle={hideModal}
  >
    <ModalHeader toggle={hideModal} />
    <ModalBody>
      <RenderAlert
        isRender={submitFailed}
        type="danger"
      />
      <form
        onSubmit={handleSubmit(handleAction)}
        className="d-flex justify-content-end flex-wrap"
      >
        <FormGroup
          className="w-100"
        >
          <Field
            className="w-100"
            component={FieldInput}
            disabled={submitting}
            type="input"
            label={label}
            name="text"
          />
        </FormGroup>
        <Button
          type="submit"
          disabled={submitting}
        >
          {buttonText}
        </Button>
      </form>
    </ModalBody>
  </Modal>
);

export default reduxForm({
  form: 'formModal',
  onSubmitSuccess: (result, dispatch, { reset }) => {
    reset();
    dispatch(actions.hideModal({ name: 'addChannel' }));
  },
})(FormModal);
