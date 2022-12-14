import React, { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Acc from "./Account";

import Form from "react-bootstrap/Form";
import {Link} from 'react-router-dom';

import { TextField } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <React.Fragment>
      <Button onClick={handleOpen}>Sign UP</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >























        <Box sx={{ ...style, width: 1400 }}>
          <Acc/>
          <Button onClick={handleClose}>Back to Login</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function Log() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [number, setnumber] = useState("");


  function validateForm() {

    return email.length > 0 && password.length > 8 && number.length > 12

  }

  function handleSubmit(event) {

    event.preventDefault();

  }
  return (
    <div>
      
      
        <Box sx={{ ...style, width: 400 }}>
          
          <div>
          <Form onSubmit={handleSubmit}><br/>
      <h3>Sign in</h3><br/><br/>
        <Form.Group size="lg" controlId="email">

         

          <TextField

label="Email" variant="outlined" 

            type="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group><br/>

        <Form.Group size="lg" controlId="password">

        <TextField

label="Account Number" variant="outlined" 

            type="number"

            value={number}

            onChange={(e) => setnumber(e.target.value)}

          />

        </Form.Group><br/>

        <Form.Group size="lg" controlId="number">


          <TextField
label="Password" variant="outlined" 
            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group><br/>
       

        <Button block size="lg" variant="contained" color="warning"  type="submit" disabled={!validateForm()} >

         <Link to="./Menu" style={{textDecoration:"none",color:"white"}}>Submit</Link>

        </Button>
        <br/>

      </Form>

    </div>
<br/>
          <ChildModal />
        </Box>
    
    </div>
  );
}
