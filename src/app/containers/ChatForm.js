import { connect } from 'react-redux';
import ChatForm from '../components/ChatForm';
import * as actionsCreators from '../actions';

const mapStateToProps = ({ currentChannelId, username }) => {
  const props = {
    currentChannelId,
    username,
  };
  return props;
};

export default connect(
  mapStateToProps,
  actionsCreators,
)(ChatForm);
