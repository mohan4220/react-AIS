import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
class Home extends Component {

  render() {
    const {classes} = this.props
    return (
      <div>
        <h1>This is Home Page OH wise one...</h1>
        <Button
          variant="contained"
          onClick={() => {
            this.props.history.push('/react-ais/about')
            return <NavLink to="/about"></NavLink>;

          }}
        >
          {" "}
          About
        </Button>
      </div>
    );
  }
}

export default Home;
