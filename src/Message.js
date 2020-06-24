import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editMessage, deleteMessage } from './redux/action';
import { isEmpty, getDate } from './helper';

class Message extends Component {
  state = {
    isEditMode: false,
    content: this.props.message.content,
    editedAt: this.props.message.createdAt,
  };

  clickHandler = (isEditMode) => (event) => {
    this.setState({ isEditMode: !isEditMode });
    if (isEditMode) {
      const editedAt = getDate();
      this.setState({ editedAt });
      this.submitHandler(event);
    }
  };

  submitHandler = ({ key, type }) => {
    const {
      props: { index, dispatchEditMessage },
      state: { content, editedAt },
    } = this;

    if (key === 'Enter' || type === 'click') {
      if (isEmpty(content)) {
        window.alert('Please enter the content');
        this.setState({ isEditMode: true });
      } else {
        dispatchEditMessage(index, content, editedAt);
        this.setState({ isEditMode: false });
      }
    }
  };

  deleteHandler = () => {
    const { index, dispatchDeleteMessage } = this.props;
    dispatchDeleteMessage(index);
  };

  updateContent = ({ target: { value: content } }) => {
    this.setState({ content });
  };

  renderOrEditMessage = (isEditMode, content) => {
    return !isEditMode ? (
      <input
        className="message-entry-container__render-content"
        value={content}
        disabled
      />
    ) : (
      <input
        className="message-entry-container__edit-content"
        value={content}
        onChange={this.updateContent}
        onKeyDown={this.submitHandler}
      />
    );
  };

  render() {
    const {
      props: { message },
      state: { isEditMode, content, editedAt },
    } = this;

    return (
      <div className="message-entry-container">
        <div className="message-entry-container__username">
          {message.username}
        </div>
        {this.renderOrEditMessage(isEditMode, content)}
        <div className="message-entry-container__wrapper">
          <div className="message-entry-container__created-at">{editedAt}</div>
          <button
            className="message-entry-container__edit-button"
            onClick={this.clickHandler(isEditMode)}
          >
            {isEditMode ? 'submit' : 'edit'}
          </button>
          <button
            className="message-entry-container__delete-button"
            onClick={this.deleteHandler}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEditMessage: (index, content, editedAt) =>
    dispatch(editMessage(index, content, editedAt)),
  dispatchDeleteMessage: (index) => dispatch(deleteMessage(index)),
});

export default connect(null, mapDispatchToProps)(Message);
