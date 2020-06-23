import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from './redux/action';

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
    const { username, content, createdAt } = this.state;

    return (
      <form
        className="form-container"
        onSubmit={(event) => {
          event.preventDefault();
          this.props.submitHandler({ username, content, createdAt });
          this.setState({ username: '', content: '' });
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

const mapDispatchToProps = (dispatch) => ({
  submitHandler: (message) => dispatch(send(message)),
});

export default connect(null, mapDispatchToProps)(Form);
