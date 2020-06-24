import {
  GET_MESSAGES,
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
} from './action';
import Api from './Api';

const initialState = {
  messages: [],
};

const reducer = (state = initialState, action) => {
  let messages;
  switch (action.type) {
    case GET_MESSAGES:
      messages = JSON.parse(Api.getMessages());
      return {
        messages,
      };
    case SEND_MESSAGE:
      messages = JSON.parse(Api.sendMessage(action.message));
      return {
        messages,
      };
    case EDIT_MESSAGE:
      messages = JSON.parse(
        Api.editMessage(action.index, action.content, action.editedAt),
      );
      return {
        messages,
      };
    case DELETE_MESSAGE:
      messages = JSON.parse(Api.deleteMessage(action.index));
      return {
        messages,
      };
    default:
      return state;
  }
};

export default reducer;
