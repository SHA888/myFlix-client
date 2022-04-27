import React from 'react';

export class RegistrationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onUsernameCreate = this.onUsernameCreate.bind(this);
    this.onPasswordCreate = this.onPasswordCreate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onUsernameCreate() {}

  onPasswordCreate() {}

  handleSubmit() {}
}
