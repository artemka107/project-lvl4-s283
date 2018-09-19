import React from 'react';
import {
  Button, Modal, FormGroup,
} from 'react-bootstrap';
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
    show={isShow}
    onHide={hideModal}
    className="pt-5"
  >
    <Modal.Header closeButton />
    <Modal.Body>
      <RenderAlert
        isRender={submitFailed}
        style="danger"
      />
      <form
        onSubmit={handleSubmit(handleAction)}
        className="d-flex justify-content-end flex-wrap"
      >
        <FormGroup
          controlId="formModalText"
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
          bsStyle="primary"
          disabled={submitting}
        >
          {buttonText}
        </Button>
      </form>
    </Modal.Body>
  </Modal>
);

export default reduxForm({
  form: 'formModal',
  onSubmitSuccess: (result, dispatch, { reset }) => {
    reset();
    dispatch(actions.hideModal({ name: 'addChannel' }));
  },
})(FormModal);
