import { connect } from 'react-redux';
import * as actionsCreators from './actions';

export default mapStateToProps => Component => connect(
  mapStateToProps,
  actionsCreators,
)(Component);
