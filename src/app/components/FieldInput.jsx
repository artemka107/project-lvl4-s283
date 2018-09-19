import React from 'react';
import { FormControl } from 'react-bootstrap';

const FieldInput = ({ input, disabled }) => (
  <FormControl
    componentClass="textarea"
    placeholder="textarea"
    disabled={disabled}
    {...input}
  />
);

export default FieldInput;
