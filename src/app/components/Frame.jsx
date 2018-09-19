import React from 'react';
import { createSelector } from 'reselect';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import connect from '../connect';

const getMessages = state => state.messages;
const getCurrentChannelId = state => state.currentChannelId;

const messagesSelector = createSelector(
  getMessages,
  getCurrentChannelId,
  (messages, id) => Object
    .values(messages)
    .filter(({ channelId }) => channelId === id),
);

const mapStateToProps = (state) => {
  const props = {
    messages: messagesSelector(state),
  };
  return props;
};


@connect(mapStateToProps)
class Frame extends React.Component {
  listGroup = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.listGroup.current.scrollIntoView(false);
  }

  render() {
    const { messages } = this.props;
    return (
      <div
        style={{
          height: '500px',
          overflowY: 'auto',
        }}
        className="border"
      >
        <div ref={this.listGroup}>
          <ListGroup>
            {messages.map(({ id, text, author }) => (
              <ListGroupItem
                key={id}
                header={author.name}
              >
                {text}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}
export default Frame;
