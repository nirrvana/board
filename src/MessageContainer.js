import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ messages }) => ({ messages });

export default connect(mapStateToProps)(MessageContainer);
