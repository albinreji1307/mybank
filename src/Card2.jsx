import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';


export default function Card2() {
  return (
    <Card style={{borderRadius:"18px",backgroundColor:"white",width:"90%"}} class="card">
      <CardActionArea>
        <CardMedia
          component="img"
        
          image='../gallery/a2.webp'
         alt="visa"
        />
       
      </CardActionArea>
    </Card>
  );
}
