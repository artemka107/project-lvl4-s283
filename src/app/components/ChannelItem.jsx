import React from 'react';
import {
  NavItem,
  NavLink,
} from 'reactstrap';
import ChannelMenu from './ChannelMenu';
import connect from '../connect';

const mapStateToProps = ({ currentChannelId, editChannel }) => {
  const props = {
    currentChannelId,
    editChannel,
  };
  return props;
};

@connect(mapStateToProps)
export default class ChannelItem extends React.Component {
  changeChannel = (e) => {
    const {
      setCurrentChannelId,
      id,
    } = this.props;

    e.preventDefault();
    setCurrentChannelId({ id });
  };

  render() {
    const {
      removable,
      currentChannelId,
      name,
      id,
    } = this.props;
    return (
      <NavItem
        className="position-relative w-100"
      >
        <NavLink
          href="#"
          onClick={this.changeChannel}
          active={id === currentChannelId}
        >
          {name}
        </NavLink>
        <ChannelMenu
          channelId={id}
          isRender={removable}
        />
      </NavItem>
    );
  }
}
