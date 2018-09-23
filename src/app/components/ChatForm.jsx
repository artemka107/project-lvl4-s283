import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  FormGroup, Button, Row, Col,
} from 'reactstrap';
import FieldInput from './FieldInput';
import connect from '../connect';
import RenderAlert from './RenderAlert';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)
class ChatForm extends React.Component {
  addMessage = ({ message }) => {
    const {
      reset,
      currentChannelId,
      sendMessage,
      username,
    } = this.props;

    return sendMessage(currentChannelId, {
      text: message,
      author: {
        name: username,
      },
    });
  };

  render() {
    const {
      handleSubmit,
      submitting,
      submitFailed,
    } = this.props;
    return (
      <div className="mt-5">
        <form
          onSubmit={handleSubmit(this.addMessage)}
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
  }
}

export default reduxForm({
  form: 'chatForm',
  onSubmitSuccess: (result, dispatch, { reset }) => {
    reset();
  },
})(ChatForm);
