import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { Col, ListGroup } from 'react-bootstrap';

class MessageContainer extends Component {
  // 기능에 버그가 발생하여 내림차순 정렬용 메소드를 적용하지 않았습니다.

  // parseDate = (date) => new Date(date).getTime();

  // sortMessages = (messages) => {
  //   messages.sort(
  //     (messageA, messageB) =>
  //       this.parseDate(messageB.createdAt) - this.parseDate(messageA.createdAt),
  //   );

  //   return messages;
  // };

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
