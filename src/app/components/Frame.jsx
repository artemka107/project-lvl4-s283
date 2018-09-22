import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import connect from '../connect';
import messagesSelector from '../selectors/messages';


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
              >
                <ListGroupItemHeading>{author.name}</ListGroupItemHeading>
                <ListGroupItemText>{text}</ListGroupItemText>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}
export default Frame;
