import React from "react";
import {  Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Button, TextField } from "@mui/material";

const ATMInput = ({
  isPinEntered,
  operation,
  onEnter,
  onRemove,
  onButtonPressed,
}) => {
  const isOperationSet = operation !== "" && operation !== undefined;
  return (
    <>
      {(!isPinEntered || isOperationSet) && (
        <Form>
          <Form.Group className="mb-3" controlId="formAmount">
            
            {!isPinEntered && (
              <TextField
                id="userInput"
                type="password"
                className="form-control"
                placeholder="Use the keyboard below"
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formKeyboard">
           

            <Button
              
             
              onClick={onEnter}
            ><br/><br/><br/>
            <Link to="../Atm1" style={{textDecoration:"none"}}><Button  variant="outlined" >Enter Atm</Button></Link>
            </Button>

            
          </Form.Group>
        </Form>
      )}
     
    </>
  );
};

export default ATMInput;
