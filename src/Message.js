import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editMessage, deleteMessage } from './redux/action';
import { isEmpty, getDate } from './helper';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Message extends Component {
  state = {
    isEditMode: false,
    content: this.props.message.content,
    editedAt: this.props.message.createdAt,
  };

  editContentField = React.createRef();

  componentDidUpdate() {
    this.state.isEditMode && this.editContentField.focus();
  }

  clickHandler = (isEditMode) => (event) => {
    if (isEditMode) {
      if (isEmpty(this.state.content)) {
        window.alert('Please enter the content');
      } else {
        const editedAt = getDate();
        this.setState({ editedAt });
        this.submitHandler(event);
        this.setState({ isEditMode: false });
      }
    } else {
      this.setState({ isEditMode: true });
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
        ref={(input) => {
          this.editContentField = input;
        }}
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
      <Container className="message-entry-container">
        <Row className="message-entry-container__username" noGutters={true}>
          {message.username}
        </Row>
        {this.renderOrEditMessage(isEditMode, content)}
        <Row className="message-entry-container__wrapper" noGutters={true}>
          <Col className="message-entry-container__created-at" lg="6">
            {editedAt}
          </Col>
          <Col lg="2">
            <Button
              className="message-entry-container__edit-button"
              onClick={this.clickHandler(isEditMode)}
              size="sm"
              variant="secondary"
            >
              {isEditMode ? 'submit' : 'edit'}
            </Button>
          </Col>
          <Col lg="4">
            <Button
              className="message-entry-container__delete-button"
              onClick={this.deleteHandler}
              size="sm"
              variant="secondary"
            >
              delete
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEditMessage: (index, content, editedAt) =>
    dispatch(editMessage(index, content, editedAt)),
  dispatchDeleteMessage: (index) => dispatch(deleteMessage(index)),
});

export default connect(null, mapDispatchToProps)(Message);
