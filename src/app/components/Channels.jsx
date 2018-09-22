import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import ConfirmationModal from './ConfirmationModal';
import CustomModal from './CustomModal';
import ChannelMenu from './ChannelMenu';
import EditChannelForm from './EditChannelForm';
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
  changeChannel = id => (e) => {
    const { setCurrentChannelId } = this.props;

    e.preventDefault();
    setCurrentChannelId({ id });
  };

  editChannel = ({ text }) => {
    const {
      editChannel,
      modal,
    } = this.props;

    editChannel({
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
      currentChannelId,
      channelsRemovingState,
      removeChannel,
    } = this.props;
    return (
      <div>
        <Nav
          pills
        >
          {channels.map(({ name, id, removable }) => (
            <NavItem
              key={id}
              className="position-relative w-100"
            >
              <NavLink
                href="#"
                onClick={this.changeChannel(id)}
                active={id === currentChannelId}
              >
                {name}
              </NavLink>
              <ChannelMenu
                id={id}
                isRender={removable}
              />
            </NavItem>
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
