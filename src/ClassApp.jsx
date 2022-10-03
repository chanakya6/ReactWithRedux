import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class ClassApp extends Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT",
    });
  };
  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT",
    });
  };
  render() {
    return (
      <div>
        <div className="reduxStyle">
          <Button onClick={this.increment} variant="success">
            Increment
          </Button>
          <Button onClick={this.decrement} variant="danger">
            Decrement
          </Button>
        </div>
        <h1 style={{ marginTop: "30px", marginLeft: "100px" }}>
          {this.props.count}
        </h1>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStatetoProps)(ClassApp);
