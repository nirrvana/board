import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './redux/action';

class Form extends Component {
  state = {
    username: '',
    content: '',
    createdAt: '2020-06-23',
  };

  updateUsername = ({ target: { value: username } }) => {
    this.setState({ username });
  };

  updateContent = ({ target: { value: content } }) => {
    this.setState({ content });
  };

  submitHandler = (username, content, createdAt) => (event) => {
    event.preventDefault();
    this.props.dispatchSendMessage({ username, content, createdAt });
    this.setState({ username: '', content: '' });
  };

  render() {
    const { username, content, createdAt } = this.state;

    return (
      <form
        className="form-container"
        onSubmit={this.submitHandler(username, content, createdAt)}
      >
        <label className="form-container__label">
          Username
          <input
            className="form-container__username-input"
            type="text"
            value={username}
            onChange={this.updateUsername}
          />
        </label>
        <label className="form-container__label">
          Content
          <input
            className="form-container__content-input"
            type="text"
            value={content}
            onChange={this.updateContent}
          />
        </label>
        <input className="form-container__submit" type="submit" value="Send" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatchToProps)(Form);
