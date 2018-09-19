import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  FormGroup, Button, Alert, Row, Col,
} from 'react-bootstrap';
import FieldInput from './FieldInput';
import connect from '../connect';

const mapStateToProps = ({ currentChannelId, username }) => {
  const props = {
    currentChannelId,
    username,
  };
  return props;
};

const ChatForm = ({
  handleSubmit,
  currentChannelId,
  sendMessage,
  username,
  submitting,
  submitFailed,
  reset,
}) => {
  const addMessage = ({ message }) => {
    reset();
    return sendMessage(currentChannelId, {
      text: message,
      author: {
        name: username,
      },
    });
  };

  const renderAlert = (isVisible) => {
    const alert = (
      <Alert
        bsStyle="danger"
      >
        <h4>Something went wrong, please, try later!</h4>
      </Alert>
    );
    return isVisible ? alert : null;
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit(addMessage)}
      >
        <Row>
          <Col md={10}>
            <FormGroup
              controlId="formControlsTextarea"
            >
              <Field
                name="message"
                component={FieldInput}
                disabled={submitting}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <Button
              type="submit"
              bsStyle="primary"
              bsSize="large"
              disabled={submitting}
              className="w-100"
            >
              Send
            </Button>

          </Col>
        </Row>
      </form>
      {renderAlert(submitFailed)}
    </div>
  );
};

const ChatFormContainer = connect(mapStateToProps)(ChatForm);

export default reduxForm({
  form: 'chatForm',
})(ChatFormContainer);
