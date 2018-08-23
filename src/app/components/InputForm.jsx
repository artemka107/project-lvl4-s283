import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const InputForm = () => (
  <form>
    <FormGroup controlId="formControlsTextarea">
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>
  </form>
);

export default InputForm;
