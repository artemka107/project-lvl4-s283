import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Channels from './Channels';
import Frame from './Frame';
import ChatForm from './ChatForm';
import AddChannel from './AddChannel';
import UserContext from '../user-context';

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
        <UserContext.Consumer>
          {username => (
            <ChatForm username={username} />
          )}
        </UserContext.Consumer>
      </Col>
    </Row>
  </Container>
);

export default App;
