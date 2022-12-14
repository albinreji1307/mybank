import React,{Component} from 'react';




import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';

import New from './New';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card1 from './Card1';
import Card2 from './Card2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


class AAA extends Component{
    render(){


        return(
            
    <div >
                   
        <div >
       
        </div>
       
        <section class="contact">
       <div class="carousel-wrapper" >
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div style={{height:"700px"}}>
                    <img src="../gallery/bankb.webp" />     
                </div>
                <div style={{height:"700px"}}>
                    <img src="../gallery/banka.webp" />     
                </div>
                <div style={{height:"700px"}}>
                    <img src="../gallery/bank3.webp" />     
                </div>
                
                
            </Carousel>
        </div>  <br/>
        <div style={{marginLeft:"7px",marginTop:"-755px" }} >         
        </div><br/>
        
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={6}>
        <center><h4 style={{fontFamily:'sans-serif'}}>
  <h2 >MY BANK</h2>
  
  <span>Expe</span>
  <span>riance N</span>
  <span>EXT G</span>
  <span>ENER</span>
  <span>ATION B</span>
  <span>ANKING</span>
 
</h4><br/> <New/></center>
        </Grid>
        <Grid item xs={2} md={3 }><br/><br/><br/><br/><br/>
       
        </Grid> <Grid item xs={2} md={3 }><br/><br/><br/><br/><br/>
       
        </Grid>
        <Grid item xs={6} md={6}>
       
         
        </Grid>
        
      </Grid>
      
    </Box>
   
        </section>
        
      </div>
     
        )
       
        
    }
  
}



    export default AAA;