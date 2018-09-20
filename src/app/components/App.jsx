import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Channels from './Channels';
import Frame from './Frame';
import ChatForm from './ChatForm';
import AddChannel from './AddChannel';
import connect from '../connect';

const mapStateToProps = ({ user, channels, currentChannelId }) => {
  const props = {
    channels,
    user,
    currentChannelId,
  };
  return props;
};

const App = () => (
  <Container>
    <Row className="show-grid">
      <Col md={3}>
        <Channels />
        <AddChannel />
      </Col>
      <Col md={9}>
        <Frame />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col md={12}>
        <ChatForm />
      </Col>
    </Row>
  </Container>);

export default connect(mapStateToProps)(App);
