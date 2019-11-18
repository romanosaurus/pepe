import React, { Component } from 'react';

import {withStyles} from "@material-ui/core";

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        cc
      </div>
    );
  }
}

export default withStyles(styles)(Main);
