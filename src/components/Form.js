import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
            name="firstName"
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
            name="lastName"
          />
        </form>
      </div>
    )
  }
}

export default Form;