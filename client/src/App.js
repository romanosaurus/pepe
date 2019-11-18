import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import Sky from 'react-sky';

import AuthentificationCard from "./components/auth/AuthCard";

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <div>
          <AuthentificationCard history={this.props.history} />
        </div>
        <Sky
          images={{
            0: "img/weed.png",
          }}
          how={150} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'100px'} /* size of the rendered images */
          background={"#303030"} /* color of background */
        />

      </div>
    );
  }
}

export default withStyles(styles)(App);
