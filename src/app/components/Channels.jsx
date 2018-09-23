import React from 'react';
import {
  Nav,
} from 'reactstrap';
import ConfirmationModal from './ConfirmationModal';
import CustomModal from './CustomModal';
import EditChannelForm from './EditChannelForm';
import ChannelItem from './ChannelItem';
import connect from '../connect';
import channelsSelector from '../selectors/channels';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    channels: channelsSelector(state),
    removeChannel: state.removeChannel,
    editChannel: state.editChannel,
    channelsRemovingState: state.channelsRemovingState,
    modal: state.modal,
  };
  return props;
};

@connect(mapStateToProps)
export default class Channels extends React.Component {
  editChannel = ({ text }) => {
    const {
      editChannel,
      modal,
    } = this.props;

    return editChannel({
      data: {
        name: text,
        ...modal.data,
      },
      ui: {
        ...modal.ui,
      },
    });
  };


  render() {
    const {
      channels,
      channelsRemovingState,
      removeChannel,
    } = this.props;
    return (
      <div>
        <Nav
          pills
        >
          {channels.map(({ name, id, removable }) => (
            <ChannelItem
              key={id}
              name={name}
              id={id}
              removable={removable}
            />
          ))}
        </Nav>
        <ConfirmationModal
          requestState={channelsRemovingState}
          handleAction={removeChannel}
        />
        <CustomModal
          name="editChannel"
        >
          <EditChannelForm
            label="Channel name"
            buttonText="Edit channel"
            handleAction={this.editChannel}
          />
        </CustomModal>
      </div>
    );
  }
}
