export const GET_MESSAGES = 'GET_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const getMessages = () => ({
  type: GET_MESSAGES,
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export const editMessage = (index, content, editedAt) => ({
  type: EDIT_MESSAGE,
  index,
  content,
  editedAt,
});

export const deleteMessage = (index) => ({
  type: DELETE_MESSAGE,
  index,
});
