import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Log from './Log';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from '@mui/material/Container';



import './Firstpage.css'






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
    <React.Fragment ><div style={{marginTop:"40px"}}>
      <Button  onClick={handleOpen} style={{width:"280px",marginLeft:"30px"}} ></Button></div>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sm={{ ...style, width:"130px",height:90 }}>
          


        <div style={{backgroundColor:"white",marginTop:"0px",marginLeft:"0px",marginRight:'0px',marginBottom:"0px"}}>
    
   
       
    <Container maxWidth="lg">
            <Formik
            
            onSubmit={(values) => {
               
            }}
            >
            {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                <div>
                    <div>
                        <center><h2 style={{fontFamily:"sans-serif",color:"#333652",paddingTop:"30px"}}>create your account</h2></center>
                    </div><br/>
                    <Form>
            {/* 1st line */}
 
        <br/>
         
         
                    </Form>
                </div>
                ) : (
                <div>
                    

                   
                   
                </div>
                )
            }
            </Formik>
            
      </Container>
        </div>
        
       </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img  onClick={handleOpen} src='../gallery/a2.webp' alt="aaa" style={{borderRadius:"18px",backgroundColor:"transparent",width:"100%"}} class="card"></img>
      
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={{ ...style, width: 400}}>
        <Log/>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}