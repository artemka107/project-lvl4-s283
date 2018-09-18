import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

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
