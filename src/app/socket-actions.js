import io from 'socket.io-client';
import * as actions from './actions';

export default (store) => {
  const socket = io();

  socket.on('newMessage', ({ data: { attributes } }) => {
    store.dispatch(actions.addMessage({ message: attributes }));
  });
};
