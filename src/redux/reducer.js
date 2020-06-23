import { SEND_MESSAGE } from './action';

const initialState = {
  messages: [
    { username: 'LEE', content: 'Dreams come true', createdAt: '2020-06-23' },
    { username: 'KIM', content: 'All is well', createdAt: '2020-06-23' },
  ],
};

const reducer = (state = initialState, action) => {
  const { messages } = state;
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...messages, action.message],
      };
    default:
      return state;
  }
};

export default reducer;
