import React, { Component } from 'react';

import { withStyles } from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Login from "./Login";
import Register from "./Register";

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 300,
    position: 'absolute',
    top: '50%',
    left: "50%",
    transform: 'translate(-50%, -50%)'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actions: {
    justifyContent: 'center'
  }
});

class AuthCard extends Component {
  constructor(props) {
    /* Basis initialization */

    super(props);
    this.state = {
      loginPart: true,
      registerPart: false
    };

    /* Binding */

    this.handleSwitchLoginButtonClick = this.handleSwitchLoginButtonClick.bind(this);
    this.handleSwitchRegisterButtonClick = this.handleSwitchRegisterButtonClick.bind(this);

  }

  handleSwitchLoginButtonClick() {
    this.setState({ loginPart: true, registerPart: false });
  }

  handleSwitchRegisterButtonClick() {
    this.setState({ loginPart: false, registerPart: true });
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActions className={classes.actions}>
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button id="switch-login-button" size="small" disabled={this.state.loginPart} onClick={this.handleSwitchLoginButtonClick}>Se connecter</Button>
            <Button id="switch-register-button" size="small" disabled={this.state.registerPart} onClick={this.handleSwitchRegisterButtonClick}>S'enregistrer</Button>
          </ButtonGroup>
        </CardActions>
        {(this.state.loginPart ?
            <Login history={this.props.history} />
            :
            <Register history={this.props.history} />
        )}
      </Card>
    );
  }
}

export default withStyles(styles)(AuthCard);
