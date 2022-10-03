import React from "react";
import Button from "react-bootstrap/Button";
import Stark from "./assests/download.png";
// import Alert from 'react-bootstrap/Alert';

function App(props) {
  return (
    <div>
      {/* <h1>{props.name}</h1> */}
      {/* <Alert variant={props.variant} >{props.alertMsg}</Alert> */}
      <Button variant="outline-danger">Reset Button</Button>
      <Button variant="outline-success">Submit Button</Button>
      <Button variant="info">Info Button</Button>
      <Button variant="warning">Warning Button</Button>
      <img src={Stark} alt="Stark in iron man" />
    </div>
  );
}

export default App;
