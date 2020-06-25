import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { Col, ListGroup } from 'react-bootstrap';

class MessageContainer extends Component {
  render() {
    const { messages } = this.props;

    return (
      <Col className="message-container">
        <ListGroup>
          {messages.map((message, index) => (
            <ListGroup.Item key={index}>
              <Message key={index} index={index} message={message} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    );
  }
}

const mapStateToProps = ({ messages }) => ({ messages });

export default connect(mapStateToProps)(MessageContainer);
