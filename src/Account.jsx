import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';

import './App.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
password: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Password is required"),
confirmpassword: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Password is required"),
firstname: Yup.string()
   .min(3, "Enter Valid Name")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
  .required("First Name required"),
 lastname: Yup.string()
   .min(1, "Enter Valid Name")
  .required("Last Name required"),
address: Yup.string()
 .required("Address required"),
 date: Yup.string()
 .required("D.O.B required"),
 course: Yup.string()
        .required('Please indicate your course'),
        number: Yup.string()
        .min(10, "Enter Valid Name")
        .max(10, "Enter Valid Name")
       .required("Mobile numebr required"),


});



  
 
export default function Acc() {

    
    return (
      <div>
    
    <div class="contacts"  >
       
    <Container maxWidth="lg">
            <Formik
            initialValues={{ email: "", password: "" ,firstname: "",lastname: "", confirmpassword: "",address: "",date: "",course: "",skill:"",number:"",}}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                console.log(values);
                alert("Form is validated! Submitting the form...");
            }}
            >
            {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                <div>
                    <div>
                       <h1 style={{fontFamily:"sans-serif",color:"#333652",fontSize:"60px",marginLeft:'100px'}}>create your  Bank account</h1>
                    </div><br></br><br/>
                    <Form>
            {/* 1st line */}
            <Grid container spacing={6}>
            <Grid item sm={4}>
                       
                        <Field
                        
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        autocomplete="off"
                        className={`mt-2 form-control
                        ${touched.firstname && errors.firstname ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                        component="div"
                        name="firstname"
                        className="invalid-feedback"
                        />
            </Grid>

            <Grid item sm={4}>
                       
                        <Field
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        autocomplete="off"
                        className={`mt-2 form-control
                        ${touched.lastname && errors.lastnamename ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                        component="div"
                        name="lastname"
                        className="invalid-feedback"
                        />
            </Grid>

              <Grid item sm={4}>
                       
                        <Field
                        
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autocomplete="off"
                        className={`mt-2 form-control
                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                        />
            </Grid>
          
                    
          {/* 2nd line */}
            <Grid item sm={4}>
                      
                        <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className={`mt-2 form-control
                        ${
                            touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                        />
         
                        <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                        />
                    </Grid>

          <Grid item sm={4}>
                       
          
                        <Field
                        type="password"
                        name="confirmpassword"
                        placeholder="Re-Enter password"
                        className={`mt-2 form-control
                        ${
                            touched.confirmpassword && errors.confirmpassword
                            ? "is-invalid"
                            : ""
                        }`}
                        />
         
                        <ErrorMessage
                        component="div"
                        name="confirmpassword"
                        className="invalid-feedback"
                        />
                    </Grid>

            <Grid item sm={4}>
            
            <Field
            type="multiline"
            name="address"
          placeholder="Enter Address"
          className={`mt-2 form-control
                        ${
                            touched.confirmpassword && errors.confirmpassword
                            ? "is-invalid"
                            : ""
                        }`}
          multiline
        />
        <ErrorMessage
                        component="div"
                        name="address"
                        className="invalid-feedback"
                        />
            </Grid>
             {/* 3rd line */}
          <Grid item sm={4}>
          <Field
                        type="number"
                        name="number"
                        placeholder="Enter Phone number"
                        className={`mt-2 form-control
                        ${
                            touched.number && errors.number
                            ? "is-invalid"
                            : ""
                        }`}
                        />
         
                        <ErrorMessage
                        component="div"
                        name="number"
                        className="invalid-feedback"
                        />


          
      
          </Grid>

          <Grid item sm={4}>
                  

          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
          </Grid>







          <Grid item sm={4}>

          <label htmlFor="date" style={{fontSize:"17px",fontFamily:"sans-serif"}} >
                        Date Of Birth
                        </label>
                        
           <Stack component="form" spacing={2}>
         
      <Field
        type="date"
        defaultValue="2017-05-24"
        name="date"
        className={`mt-2 form-control
          ${
            touched.confirmpassword && errors.confirmpassword
            ? "is-invalid"
            : ""
          }`}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <ErrorMessage
                        component="div"
                        name="date"
                        className="invalid-feedback"
                        />
      </Stack>

</Grid>



<Grid item sm={4}>
<Button component="label" color="primary" style={{width:"280px", backgroundColor:"#90ADC6",color:'black'}}>
        {" "}
        Upload Aadhar
        <input type="file" hidden />
      </Button>
</Grid>

<Grid item sm={4}>

</Grid>

<Grid item sm={4}>
<center><Button 
type="submit"
variant="contained"style={{width:"130px",backgroundColor:"green"}}><Link to="/Menu">Submit</Link></Button>
</center>
</Grid>



<br/><br/>

                  
          </Grid>
 
         <center> </center>
         
         
                    </Form>
                </div>
                ) : (
                <div>
                    <h1 className="p-3 mt-5">Form Submitted</h1>

                    <div className="alert alert-success mt-3">
                    Thank for your connecting with us. Here's what we got from
                    you !
                    </div>
                    <ul className="list-group">
                    <li className="list-group-item">Email: {values.email}</li>
                    <li className="list-group-item">
                        Password: {values.password}
                    </li>
                    </ul>
                </div>
                )
            }
            </Formik>
      </Container>
        </div>
       
        </div>
    );
  
}



