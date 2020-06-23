import React, { Component } from 'react';
import Message from './Message';

class MessageContainer extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div className="message-container">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    );
  }
}

export default MessageContainer;
