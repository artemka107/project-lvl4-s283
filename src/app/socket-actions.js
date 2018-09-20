import io from 'socket.io-client';
import * as actions from './actions';

export default (store) => {
  const socket = io();

  socket.on('newMessage', ({ data: { attributes } }) => {
    store.dispatch(actions.addMessage({ message: attributes }));
  });

  socket.on('newChannel', ({ data: { attributes } }) => {
    store.dispatch(actions.addChannel({ channel: attributes }));
  });

  socket.on('removeChannel', ({ data: { id } }) => {
    store.dispatch(actions.removeChannelSuccess({ id }));
  });

  socket.on('renameChannel', ({ data: { attributes: { name, id } } }) => {
    store.dispatch(actions.renameChannel({ name, id }));
  });
};
