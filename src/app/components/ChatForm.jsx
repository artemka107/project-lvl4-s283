import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  FormGroup, Button, Row, Col,
} from 'reactstrap';
import FieldInput from './FieldInput';
import connect from '../connect';
import RenderAlert from './RenderAlert';

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

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit(addMessage)}
      >
        <Row>
          <Col md={10}>
            <FormGroup>
              <Field
                name="message"
                type="textarea"
                component={FieldInput}
                disabled={submitting}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <Button
              type="submit"
              disabled={submitting}
              color="primary"
              className="w-100"
            >
              Send
            </Button>

          </Col>
        </Row>
      </form>
      <RenderAlert
        isRender={submitFailed}
        type="danger"
      />
    </div>
  );
};

const ChatFormContainer = connect(mapStateToProps)(ChatForm);

export default reduxForm({
  form: 'chatForm',
})(ChatFormContainer);
