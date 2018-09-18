import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Frame from '../components/Frame';
import * as actionsCreators from '../actions';

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

export default connect(
  mapStateToProps,
  actionsCreators,
)(Frame);
