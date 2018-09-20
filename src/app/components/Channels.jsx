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
import ConfirmationModal from './ConfirmationModal';
import connect from '../connect';

const mapStateToProps = ({
  currentChannelId,
  channels,
  removeChannel,
  hideModal,
  showModal,
  modal,
  channelsRemovingState,
}) => {
  const props = {
    currentChannelId,
    channels,
    removeChannel,
    hideModal,
    showModal,
    modal,
    channelsRemovingState,
  };
  return props;
};

const Channels = ({
  channels,
  currentChannelId,
  setCurrentChannelId,
  removeChannel,
  hideModal,
  showModal,
  modal,
  channelsRemovingState,
}) => {
  const handleChannelChange = id => (e) => {
    e.preventDefault();
    setCurrentChannelId({ id });
  };
  const currentModal = 'confirmation';

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
        <DropdownItem>
          Edit
        </DropdownItem>
        <DropdownItem
          onClick={() => showModal({ name: currentModal })}
        >
          <ConfirmationModal
            hideModal={() => hideModal({ name: currentModal })}
            modal={modal}
            handleAction={() => removeChannel(channelId)}
            requestState={channelsRemovingState}
          />
          Remove
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

  return (
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
  );
};

export default connect(mapStateToProps)(Channels);
