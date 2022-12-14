import React, { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./App.css";
import Balance from "./Balance";
import ATMInput from "./ATMInput";



const OPERATIONS = ["DEPOSIT", "CASH BACK", ""];

function App1() {
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [operation, setOperation] = useState("");

  useEffect(() => {
    let n = "";
    while (n === "") {
      n = window.prompt("Hello! Enter your name. It's required");
    }
    setName(n);
  }, []);

  const isPinEntered = () => {
    return pin === "1234";
  };

  const handleOnEnter = (e) => {
    if (!isPinEntered()) {
      enterPin();
    } else {
      updateBalance();
    }
  };

  const handleOnRemove = (e) => {
    const userInput = document.getElementById("userInput");
    const textLength = userInput.value.length;
    if (textLength > 0) {
      console.log(userInput.value.substring(0, textLength - 1));
      userInput.value = userInput.value.substring(0, textLength - 1);
    }
  };

  const handleOnButtonPressed = (e) => {
    document.getElementById("userInput").value += +e.target.innerText;
  };

  const handleOnSetOperation = (operationIndex) => {
    setOperation(OPERATIONS[operationIndex]);
  };

  const enterPin = () => {
    const text = document.getElementById("userInput").value;
    if (text !== "1234") {
      alert("Incorrect PIN");
      return;
    }
    setPin(text);
  };

  
  return (
    <Container style={{marginTop:"300px"}}>
      <Row>
      
            <Balance
              isPinEntered={isPinEntered()}
              name={name}
              balance={balance}
              operation={operation}
              onSetOperation={handleOnSetOperation}
            />
          
       
            <ATMInput
              isPinEntered={isPinEntered()}
              operation={operation}
              onEnter={handleOnEnter}
              onRemove={handleOnRemove}
              onButtonPressed={handleOnButtonPressed}
            />
         
      </Row>
    </Container>
  );
}

export default App1;
