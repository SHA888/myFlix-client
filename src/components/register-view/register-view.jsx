import React from 'react';

import './register-view.scss';

export class RegisterView extends React.Component {
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
