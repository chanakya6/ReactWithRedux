import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import dataContext from "./contextAPI";

const Component4 = () => {
  let userValue = useContext(dataContext);
  let navigate = useNavigate();
  return (
    <div>
      <h1>Component 4 with user {userValue} </h1>
      <br />
      <Button
        variant="outline-warning"
        size="lg"
        onClick={() => {
          navigate("/component2");
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Component4;
