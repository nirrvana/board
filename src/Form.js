import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './redux/action';

class Form extends Component {
  state = {
    username: '',
    content: '',
  };

  isEmpty = (value) => !/\S/.test(value);

  getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();

    const createdAt = `${year}-${month + 1 < 10 ? `0${month + 1}` : month}-${
      date < 10 ? `0${date}` : date
    } ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;

    return createdAt;
  };

  updateUsername = ({ target: { value: username } }) => {
    this.setState({ username });
  };

  updateContent = ({ target: { value: content } }) => {
    this.setState({ content });
  };

  submitHandler = (username, content) => (event) => {
    event.preventDefault();

    if (this.isEmpty(username)) {
      window.alert('Please enter your username');
    } else if (this.isEmpty(content)) {
      window.alert('Please enter the content');
    } else {
      const createdAt = this.getDate();
      this.props.dispatchSendMessage({ username, content, createdAt });
      this.setState({ username: '', content: '' });
    }
  };

  render() {
    const { username, content } = this.state;

    return (
      <form
        className="form-container"
        onSubmit={this.submitHandler(username, content)}
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
