import React from 'react';
import { Link, } from 'react-router-dom'
  import { Button } from '@material-ui/core';
   
   

class Nav extends React.Component{
  render(){


      return(
 
        <div> 
 <div   style={{marginLeft:"90%",marginTop:"30px"}}>
 
     
         <Link to="/Menu" style={{color:"black",textDecoration:"none"}} ><Button variant="outlined">Home</Button></Link>
     
     </div>
     </div>   
      );
    }
}
export default Nav;