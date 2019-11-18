import React, { Component } from 'react';

import { withStyles } from "@material-ui/core";

import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import { withRouter } from 'react-router-dom';

import Cookies from "universal-cookie";

const cookies = new Cookies();

const styles = theme => ({
  actions: {
    justifyContent: 'center'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_email: '',
      login_password: ''
    };

    this.handleInput = this.handleInput.bind(this);

    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin() {
    const payload = {
      email: this.state.login_email,
      password: this.state.login_password
    };

    fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then((res) => {
        cookies.set('access_token', res.user.accessToken);
        this.props.history.push('/main');
        console.log('ahh')
      })
  }

  handleInput(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <CardContent>
          <TextField
            id="login_email"
            label="Email"
            margin="normal"
            type="text"
            variant="outlined"
            value={this.state.login_email}
            onChange={this.handleInput}
            fullWidth
          />
          <TextField
            id="login_password"
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            value={this.state.login_password}
            onChange={this.handleInput}
            fullWidth
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button className={classes.actions} color="primary" variant="outlined" onClick={this.submitLogin}>
            Se connecter
          </Button>
        </CardActions>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Login));
