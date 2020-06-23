import React, { Component } from 'react';
import Form from './Form';
import MessageContainer from './MessageContainer';
import './App.css';

class App extends Component {
  state = {
    messages: [
      { username: 'LEE', content: 'Dreams come true', createdAt: '2020-06-23' },
      { username: 'KIM', content: 'All is well', createdAt: '2020-06-23' },
    ],
  };

  send = (message) =>
    this.setState(({ messages }) => ({ messages: [...messages, message] }));

  render() {
    const {
      send,
      state: { messages },
    } = this;

    return (
      <div className="container">
        <Form send={send} />
        <MessageContainer messages={messages} />
      </div>
    );
  }
}

export default App;
