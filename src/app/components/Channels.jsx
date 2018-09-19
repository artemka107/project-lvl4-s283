import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import connect from '../connect';

const mapStateToProps = ({ currentChannelId, channels }) => {
  const props = {
    currentChannelId,
    channels,
  };
  return props;
};

const Channels = ({ channels, currentChannelId, setCurrentChannelId }) => {
  const handleSelect = (key) => {
    setCurrentChannelId({ id: key });
  };

  return (
    <Nav
      stacked
      bsStyle="pills"
      activeKey={currentChannelId}
      onSelect={key => handleSelect(key)}
    >
      { channels.map(({ name, id }) => (
        <NavItem
          key={id}
          eventKey={id}
          className="w-100"
        >
          {name}
        </NavItem>
      ))}
    </Nav>
  );
};

export default connect(mapStateToProps)(Channels);
