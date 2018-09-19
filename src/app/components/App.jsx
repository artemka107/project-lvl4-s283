import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Channels from './Channels';
import Frame from './Frame';
import ChatForm from './ChatForm';
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
  <Grid>
    <Row className="show-grid">
      <Col md={3}>
        <Channels />
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
  </Grid>);

export default connect(mapStateToProps)(App);
