import { SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from './action';

const initialState = {
  messages: [
    {
      username: 'LEE',
      content: 'Dreams come true',
      createdAt: '2020-06-23 23:00',
    },
    {
      username: 'KIM',
      content: 'All is well',
      createdAt: '2020-06-23 23:30',
    },
  ],
};

const reducer = (state = initialState, action) => {
  const { messages } = state;
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...messages, action.message],
      };
    case EDIT_MESSAGE:
      return {
        messages: messages.map((message, index) =>
          index === action.index
            ? {
                ...message,
                content: action.content,
                createdAt: action.editedAt,
              }
            : message,
        ),
      };
    case DELETE_MESSAGE:
      return {
        messages: messages.filter((_message, index) => index !== action.index),
      };
    default:
      return state;
  }
};

export default reducer;
