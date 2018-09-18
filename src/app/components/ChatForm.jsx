import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormGroup, Button } from 'react-bootstrap';
import FieldInput from './FieldInput';

const ChatForm = ({
  handleSubmit,
  reset,
  currentChannelId,
  sendMessage,
  username,
}) => {
  const addMessage = ({ message }) => {
    sendMessage(currentChannelId, {
      text: message,
      author: {
        name: username,
      },
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(addMessage)}
    >
      <FormGroup
        controlId="formControlsTextarea"
      >
        <Field
          name="message"
          component={FieldInput}
        />
      </FormGroup>
      <Button type="submit" bsStyle="primary">Send</Button>
    </form>
  );
};

export default reduxForm({
  form: 'chatForm',
})(ChatForm);
