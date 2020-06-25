import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMessages } from './redux/action';
import Entry from './Entry';
import MessageContainer from './MessageContainer';
import { Container, Row } from 'react-bootstrap';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatchGetMessage();
  }

  render() {
    return (
      <Container className="container" fluid>
        <Row className="container-row container-title" noGutters={true}>
          BOARD
        </Row>
        <Row className="container-row" noGutters={true}>
          <Entry />
        </Row>
        <Row className="container-row" noGutters={true}>
          <MessageContainer />
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchGetMessage: () => dispatch(getMessages()),
});

export default connect(null, mapDispatchToProps)(App);
