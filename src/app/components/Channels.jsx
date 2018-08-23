import React from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';

const Channels = ({ channels }) => (
  <ListGroup>
    { channels.map(({ name, id }) => <ListGroupItem key={id}>{name}</ListGroupItem>)}
  </ListGroup>
);

export default Channels;
