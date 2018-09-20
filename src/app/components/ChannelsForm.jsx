import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import { Field } from 'redux-form';
import FieldInput from './FieldInput';
import RenderAlert from './RenderAlert';

class FormModal extends React.Component {
  componentDidMount() {
    const { initialize, initialValues } = this.props;
    return initialize && initialize({
      ...initialValues,
    });
  }

  render() {
    const {
      handleAction,
      buttonText,
      submitting,
      label,
      handleSubmit,
      submitFailed,
    } = this.props;

    return (
      <div>
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
      </div>
    );
  }
}

export default FormModal;
