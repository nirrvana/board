import React, { Component } from 'react';

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

  render() {
    const {
      props: { send },
      state: { username, content, createdAt },
    } = this;

    return (
      <form
        className="form-container"
        onSubmit={(event) => {
          event.preventDefault();
          send({ username, content, createdAt });
        }}
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

export default Form;
