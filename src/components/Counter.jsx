import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.count);
  const handleIncrement = () => {
    dispatch(increment(1));
  };
  const handleDecrement = () => {
    dispatch(decrement(1));
  };
  return (
    <div>
      <div className="reduxStyle">
        <Button onClick={() => handleIncrement()} variant="success">
          Increment
        </Button>
        <Button onClick={() => handleDecrement()} variant="danger">
          Decrement
        </Button>
      </div>
      <h1 style={{ marginTop: "30px", marginLeft: "100px" }}>{counter}</h1>
    </div>
  );
};

export default Counter;
