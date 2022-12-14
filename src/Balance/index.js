import React from "react";
import { Alert, Button } from "react-bootstrap";
import Nav from "../Navlink";
const Balance = ({
  name,
  balance,
  isPinEntered,
  operation,
  onSetOperation,
}) => {
  const enterPin = (
    <Alert variant="light">
      <h3>Enter your PIN, {name}</h3>
      <h5>Note: 1234</h5>
    </Alert>
  );



  return (
    <>
    <Nav/>
      {!isPinEntered && enterPin}
     
    </>
  );
};

export default Balance;
