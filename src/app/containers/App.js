import { connect } from 'react-redux';
import App from '../components/App';
import * as actionsCreators from '../actions';

const mapStateToProps = ({ user, channels, currentChannelId }) => {
  const props = {
    channels,
    user,
    currentChannelId,
  };
  return props;
};

export default connect(
  mapStateToProps,
  actionsCreators,
)(App);
