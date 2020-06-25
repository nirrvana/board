import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './redux/action';
import { isEmpty, getDate } from './helper';
import { Col, Form, Button } from 'react-bootstrap';

class Entry extends Component {
  state = {
    username: '',
    content: '',
  };

  updateUsername = ({ target: { value: username } }) => {
    this.setState({ username });
  };

  updateContent = ({ target: { value: content } }) => {
    this.setState({ content });
  };

  submitHandler = (username, content) => (event) => {
    event.preventDefault();

    if (isEmpty(username)) {
      window.alert('Please enter your username');
    } else if (isEmpty(content)) {
      window.alert('Please enter the content');
    } else {
      const createdAt = getDate();
      this.props.dispatchSendMessage({ username, content, createdAt });
      this.setState({ username: '', content: '' });
    }
  };

  render() {
    const { username, content } = this.state;

    return (
      <Col>
        <Form
          className="form-container"
          onSubmit={this.submitHandler(username, content)}
        >
          <Form.Group>
            <Form.Label className="form-container__label">
              Username
              <Form.Control
                className="form-container__username-input"
                type="text"
                value={username}
                onChange={this.updateUsername}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label className="form-container__label">
              Content
              <Form.Control
                className="form-container__content-input"
                type="text"
                value={content}
                onChange={this.updateContent}
              />
            </Form.Label>
          </Form.Group>
          <Button className="form-container__submit" type="submit">
            Send!
          </Button>
        </Form>
      </Col>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatchToProps)(Entry);
