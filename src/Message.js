import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editMessage } from './redux/action';

class Message extends Component {
  state = {
    isEditMode: false,
    content: this.props.message.content,
    createdAt: '2020-06-23',
  };

  clickHandler = (isEditMode) => (event) => {
    this.setState({ isEditMode: !isEditMode });
    if (isEditMode) {
      this.submitHandler(event);
    }
  };

  submitHandler = ({ key, type }) => {
    const {
      props: { index, dispatchEditMessage },
      state: { content },
    } = this;

    if (key === 'Enter' || type === 'click') {
      dispatchEditMessage(index, content);
      this.setState({ isEditMode: false });
    }
  };

  updateContent = ({ target: { value: content } }) => {
    this.setState({ content });
  };

  renderOrEditMessage = (isEditMode) => {
    return !isEditMode ? (
      <input
        className="message-entry-container__render-content"
        value={this.state.content}
        disabled
      />
    ) : (
      <input
        className="message-entry-container__edit-content"
        value={this.state.content}
        onChange={this.updateContent}
        onKeyDown={this.submitHandler}
      />
    );
  };

  render() {
    const {
      props: { message },
      state: { isEditMode },
    } = this;

    return (
      <div className="message-entry-container">
        <div className="message-entry-container__username">
          {message.username}
        </div>
        {this.renderOrEditMessage(isEditMode)}
        <div className="message-entry-container__wrapper">
          <div className="message-entry-container__created-at">
            {message.createdAt}
          </div>
          <button
            className="message-entry-container__edit-button"
            onClick={this.clickHandler(isEditMode)}
          >
            {isEditMode ? 'submit' : 'edit'}
          </button>
          <button className="message-entry-container__delete-button">
            delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEditMessage: (index, content) =>
    dispatch(editMessage(index, content)),
});

export default connect(null, mapDispatchToProps)(Message);
