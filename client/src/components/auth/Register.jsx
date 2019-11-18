import React, { Component } from 'react';

import { withStyles } from "@material-ui/core";

import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  actions: {
    justifyContent: 'center'
  }
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { register_email: '', register_first_name: '', register_last_name: '', register_password: ''};

    this.handleInput = this.handleInput.bind(this);

    this.submitRegister = this.submitRegister.bind(this);
  }

  submitRegister() {
    const payload = {
      email: this.state.register_email,
      firstName: this.state.register_first_name,
      lastName: this.state.register_last_name,
      password: this.state.register_password
    };

    fetch('/user/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then((res) => {
        console.log(res);
      });
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
            required
            id="register_first_name"
            label="Prénom"
            type="text"
            margin="normal"
            variant="outlined"
            onChange={this.handleInput}
            fullWidth
          />
          <TextField
            required
            id="register_last_name"
            label="Nom de famille"
            type="text"
            margin="normal"
            variant="outlined"
            onChange={this.handleInput}
            fullWidth
          />
          <TextField
            required
            id="register_email"
            type="text"
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={this.handleInput}
            fullWidth
          />
          <TextField
            required
            id="register_password"
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            onChange={this.handleInput}
            fullWidth
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button className={classes.actions} color="primary" variant="outlined" onClick={this.submitRegister}>
            S'enregistrer
          </Button>
        </CardActions>
      </div>
    );
  }
}

export default withStyles(styles)(Register);
