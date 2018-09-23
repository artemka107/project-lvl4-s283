import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import connect from '../connect';

const mapStateToProps = ({ showModal }) => {
  const props = {
    showModal,
  };

  return props;
};

@connect(mapStateToProps)
export default class ChannelMenu extends React.Component {
  chooseModal = (modalName, channelId) => {
    const { showModal } = this.props;

    showModal({
      ui: {
        name: modalName,
      },
      data: {
        id: channelId,
      },
    });
  };

  showEditChannelModal = channelId => () => this.chooseModal('editChannel', channelId);

  showConfirmationModal = channelId => () => this.chooseModal('confirmation', channelId);

  render() {
    const {
      isRender,
      channelId,
    } = this.props;

    if (!isRender) {
      return null;
    }
    return (
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
            onClick={this.showEditChannelModal(channelId)}
          >
            Edit
          </DropdownItem>
          <DropdownItem
            onClick={this.showConfirmationModal(channelId)}
          >
            Remove
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
