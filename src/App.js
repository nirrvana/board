import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMessages } from './redux/action';
import Form from './Form';
import MessageContainer from './MessageContainer';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatchGetMessage();
  }

  render() {
    return (
      <div className="container">
        <Form />
        <MessageContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchGetMessage: () => dispatch(getMessages()),
});

export default connect(null, mapDispatchToProps)(App);
