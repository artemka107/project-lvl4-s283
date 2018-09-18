import { connect } from 'react-redux';
import Channels from '../components/Channels';
import * as actionsCreators from '../actions';

const mapStateToProps = ({ currentChannelId, channels }) => {
  const props = {
    currentChannelId,
    channels,
  };
  return props;
};

export default connect(
  mapStateToProps,
  actionsCreators,
)(Channels);
