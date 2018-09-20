import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import ConfirmationModal from './ConfirmationModal';
import CustomModal from './CustomModal';
import connect from '../connect';
import ChannelsForm from './ChannelsForm';

const EditChannelForm = reduxForm({
  form: 'EditChannelForm',
  onSubmitSuccess: (result, dispatch, { reset }) => {
    reset();
  },
})(ChannelsForm);

const getChannels = state => state.channels;

const channelsSelector = createSelector(
  getChannels,
  messages => Object.values(messages),
);

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

const Channels = ({
  channels,
  currentChannelId,
  channelsRemovingState,
  setCurrentChannelId,
  showModal,
  removeChannel,
  editChannel,
  modal,
}) => {
  const handleChannelChange = id => (e) => {
    e.preventDefault();
    setCurrentChannelId({ id });
  };
  const confirmationModal = 'confirmation';
  const editChannelModal = 'editChannel';

  const { name: text } = channels.find(({ id }) => id === modal.data.id) || { name: '' };
  const initialValues = {
    text,
  };

  const NavItemMenu = channelId => (
    <UncontrolledDropdown
      className="position-absolute"
      style={{
        left: '-50px',
        top: 0,
      }}
    >
      <DropdownToggle
        caret
        color="link"
      />
      <DropdownMenu>
        <DropdownItem
          onClick={() => showModal({
            ui: {
              name: editChannelModal,
            },
            data: {
              id: channelId,
            },
          })}
        >
          Edit
        </DropdownItem>
        <DropdownItem
          onClick={() => showModal({
            ui: {
              name: confirmationModal,
            },
            data: {
              id: channelId,
            },
          })}
        >
          Remove
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

  return (
    <div>
      <Nav
        pills
      >
        { channels.map(({ name, id, removable }) => (
          <NavItem
            key={id}
            className="position-relative w-100"
          >
            <NavLink
              href="#"
              onClick={handleChannelChange(id)}
              active={id === currentChannelId}
            >
              {name}
            </NavLink>
            {removable ? NavItemMenu(id) : null}
          </NavItem>
        ))}
      </Nav>
      <ConfirmationModal
        requestState={channelsRemovingState}
        handleAction={removeChannel}
      />
      <CustomModal name={editChannelModal}>
        <EditChannelForm
          label="Channel name"
          buttonText="Edit channel"
          initialValues={initialValues}
          handleAction={({ text }) => editChannel({
            data: {
              name: text,
              ...modal.data,
            },
            ui: {
              ...modal.ui,
            },
          })}
        />
      </CustomModal>
    </div>
  );
};

export default connect(mapStateToProps)(Channels);
