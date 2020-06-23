import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { message } = this.props;

    return (
      <div className="message-entry-container">
        <div className="message-entry-container__username">
          {message.username}
        </div>
        <div className="message-entry-container__content">
          {message.content}
        </div>
        <div className="message-entry-container__wrapper">
          <div className="message-entry-container__created-at">
            {message.createdAt}
          </div>
          <button className="message-entry-container__edit-button">edit</button>
          <button className="message-entry-container__delete-button">
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default Message;
