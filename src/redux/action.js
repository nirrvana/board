export const SEND_MESSAGE = 'SEND_MESSAGE';

export const send = (message) => ({
  type: SEND_MESSAGE,
  message,
});
