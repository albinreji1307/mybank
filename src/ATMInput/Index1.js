import React from "react";
import {  Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Button, TextField } from "@mui/material";

const ATMI = ({
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
            {new Array(9).fill(0).map((item, index) => {
              return (
                <Button
                 
                  variant="outlined"
                  onClick={onButtonPressed}
                >
                  {index + 1}
                </Button>
              );
            })}

            <Button
              
             
              onClick={onEnter}
            >
            <Link to="./Atm" style={{textDecoration:"none"}}><Button  variant="contained" >Enter</Button></Link>
            </Button>

            <Button
             
              
              onClick={onRemove}
            >
             <Button variant="contained">Remove</Button>
            </Button>
          </Form.Group>
        </Form>
      )}
     
    </>
  );
};

export default ATMI;
