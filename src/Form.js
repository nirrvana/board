import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="form-container">
        <label className="form-container__label">
          Username
          <input className="form-container__username-input" />
        </label>

        <label className="form-container__label">
          Content
          <input className="form-container__content-input" />
        </label>
      </form>
    );
  }
}

export default Form;
