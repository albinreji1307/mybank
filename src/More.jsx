import React,{Component} from 'react';




import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



class More extends Component{
  
        constructor(props) {
          super(props);
          this.state = { value: "" };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
          this.setState({ value: event.target.value });
        }
        handleSubmit(event) {
          var a = this.state.value;
          var re = /^[A-Za-z]+$/;
      
          if (re.test(a)) {
          } else {
            alert("Invalid Input");
          }
          event.preventDefault();
        }
        render() {
  


      return(
        <div>
        
   
  
  

        <div>
       
      
        
        

        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">

        </Box>
  <div class="contactfeed" >
   
    
  
      
<div style={{marginLeft:"40px"}}><br/><br/><br/><br/><br/> 
<h2 style={{fontFamily:'sans-serif',color:"black",backgroundColor:"" ,paddingLeft:'0px'}}><center>Contact us</center></h2><br/>
            <Box sx={{ width: '100%' }}
            ><Grid container rowSpacing={8} columnSpacing={{ xs: 4, sm: 5, md: 1 }} >
              
      
        <Grid item xs={8} style={{textAlign:"right"}}>
      
           <form>
<TextField   type="text"


                placeholder="Name"
                 value={this.state.value}
                 onChange={this.handleChange}
                 onBlur={this.handleSubmit}
                 required
                    label="Full Name" variant="outlined" style={{width:"500px",backgroundColor:"#f5f9fa71"}}/><br/><br/>


<TextField
 
placeholder="abc@gmail.com"
type="email"
required
label="E-mail" variant="outlined" style={{width:"500px",backgroundColor:"#f5f9fa71"}} /><br/><br/>
<TextField 
type="number"
placeholder=""
required
label="Phone" variant="outlined"  style={{width:"500px",backgroundColor:"#f5f9fa71"}}/><br/><br/>
<TextField
         
          label="   Enqury"
          multiline
          
          rows={7}
          style={{width:"500px",backgroundColor:"#f5f9fa71"}}
        
        /><br/><br/>
        <Button variant='outlined' type="Submit" style={{color:"black"}}>SEND</Button>

       </form>
         </Grid>
         
        
        
        </Grid>
        <div style={{marginTop:"-50px"}}>
        </div><br/>
        </Box>
        
        </div>
        </div>
        </div>
        
       </div>
       
       );
       }
       }

export default More;

