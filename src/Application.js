import React from "react";

import Container from '@mui/material/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SavingsIcon from '@mui/icons-material/Savings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Nav from "./Navlink";
export default function Acc1() {

    
    return (
      <div>
     
    <div >
    
    <Container maxWidth="sm" style={{border: "3px solid #385E72",marginTop:"100px",borderRadius:"14px"}}>
    <Nav/>  <center><h5 style={{fontFamily:'sans-serif'}}>
  <h2 >MY BANK</h2><span>Experiance N</span>
  <span>EXT G</span>
  <span>ENERATION B</span>
  <span>ANKING</span><br/><br/>

  <span>  <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div style={{height:"210px"}}>
                    <img src="../gallery/bank1.webp" />     
                </div>
                <div style={{height:"210px"}}>
                    <img src="../gallery/bank3.webp" />     
                </div>
                <div style={{height:"210px"}}>
                    <img src="../gallery/bank4.webp" />     
                </div>
                
                
            </Carousel>
        </div> </span><span><h3>SERVICES</h3></span><br/>
       <span> <ShoppingCartCheckoutIcon/><br/><h6>Shoppin</h6></span>
       <span> <AddCardIcon/><br/><h6>g Credit Car</h6></span>
       <span> <LocalHospitalIcon/><br/><h6>d Insurance</h6></span>
 
 <br/><br/>


        <span><h3>MY BANKINGS</h3></span><br/>
       
       
       
       

</h5></center><br/> <span><Link to="/Accbalance"><AccountCircleIcon/><br/><h6> ACCOUNT</h6></Link></span> <span><Link to="/Atm2"><AccountBalanceIcon/><br/><h6> BALANC</h6></Link></span>
<span><Link to="/Accbalance"><SavingsIcon/><br/><h6>E  WALLE</h6></Link></span><span><Link to="/Menu"><ManageAccountsIcon/><br/><h6>T SETTINGS</h6></Link></span>
      </Container>
        </div>
      
        </div>
    );
  
}



