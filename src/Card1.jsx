import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Log from './Login';
export default function Card1() {
  return (
    <h1 style={{borderRadius:"18px",backgroundColor:"white",width:"90%"}} class="card">
      <CardActionArea><Log/>
     

       
      </CardActionArea>
    </h1>
  );
}
