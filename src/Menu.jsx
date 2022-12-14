import React,{Component} from 'react';


import'./Firstpage.css';


import {Link} from 'react-router-dom';





class Menu extends Component{
  render(){


      return(
      <div class="contact"> 
 
    <div  style={{marginLeft:"30px"}} ><br/>

<h2  style={{fontFamily:'sans-serif' }} >Welcome Albin </h2>
<br/>
    
     
      <div class="cards" >
<article class="card card--1">
  <div class="card__info-hover">
    
      <div class="card__clock-info">
        
      </div>
    
  </div>
  <div class="card__img"></div>
  <Link to='/App1' class="card_link">
     <div class="card__img--hover"></div>
   </Link><center>
  <h5 style={{marginTop:"40px",fontSize:"35px"}}>Atm</h5></center>
</article>
  
  
<article class="card card--2">
  <div class="card__info-hover">
  
      <div class="card__clock-info">

      </div>
    
  </div>
  <div class="card__img"></div>
  <Link to='/App' class="card_link">
     <div class="card__img--hover"></div>
   </Link>
   <center>
  
 
  <h5 style={{marginTop:"40px",fontSize:"35px"}}>Banking</h5></center>
</article>

  
<article class="card card--3 " >
  <div class="card__info-hover">
    
      <div class="card__clock-info">
        
       
      </div>
    
  </div>
  <div class="card__img"></div>
  <Link to='/Application' class="card_link">
     <div class="card__img--hover"></div>
   </Link><center>
   <h5 style={{marginTop:"40px",fontSize:"35px",}}>APP</h5></center>
</article>  
  
  
 
  </div>
       
        </div>
        <br/> <br/><br/><br/>
        </div> 
        
        )
       
        
    }
  
}

export default Menu;