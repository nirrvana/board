export const SEND_MESSAGE = 'SEND_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export const editMessage = (index, content) => ({
  type: EDIT_MESSAGE,
  index,
  content,
});
