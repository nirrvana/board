export default class Api {
  static getMessages = () => {
    const messagesData = JSON.parse(localStorage.getItem('messages'));
    let messages;

    if (Array.isArray(messagesData)) {
      messages = JSON.stringify(messagesData);
    } else {
      messages = JSON.stringify([
        { username: 'RAIN', content: 'GGANG', createdAt: '2020-06-06 23:23' },
      ]);

      localStorage.setItem('messages', messages);
    }

    return messages;
  };

  static sendMessage = (message) => {
    const messages = JSON.parse(localStorage.getItem('messages'));
    const newMessages = JSON.stringify([...messages, message]);
    localStorage.setItem('messages', newMessages);

    return newMessages;
  };

  static editMessage = (targetIndex, content, editedAt) => {
    const messages = JSON.parse(localStorage.getItem('messages'));
    const newMessages = JSON.stringify(
      messages.map((message, index) =>
        index === targetIndex
          ? { ...message, content, createdAt: editedAt }
          : message,
      ),
    );
    localStorage.setItem('messages', newMessages);

    return newMessages;
  };

  static deleteMessage = (targetIndex) => {
    const messages = JSON.parse(localStorage.getItem('messages'));
    const newMessages = JSON.stringify(
      messages.filter((_message, index) => index !== targetIndex),
    );

    localStorage.setItem('messages', newMessages);
    return newMessages;
  };
}
