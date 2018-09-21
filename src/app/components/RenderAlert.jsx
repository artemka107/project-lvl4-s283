import { Alert } from 'reactstrap';
import React from 'react';

const RenderAlert = ({ isRender, type }) => {
  if (!isRender) {
    return null;
  }
  return (
    <Alert
      color={type}
    >
      <h4>Something went wrong, please, try later!</h4>
    </Alert>
  );
};

export default RenderAlert;
