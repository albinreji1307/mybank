import React from "react";

import { List, ListItem, Button, AppBar } from "@mui/material";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import App from "./App";
import './Firstpage.css';
import AAA from "./home";
import Acc from "./Account";
import Loog from "./Log";
import App1 from "./App1";
import Menu from "./Menu";
import New from "./New";
import Atm1 from "./component/bank/Atm1"
import Atm2 from "./component/bank/Atm2";
import ATMI from "./ATMInput/Index1";
import More from "./More";
import Acc1 from "./Application";
import Acc2 from "./Accbalance";
import Atm3 from "./component/bank/Atm3";
const preventDefault = (event) => event.preventDefault();
export default function Navbar() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          typography: "body1",
          "& > :not(style) + :not(style)": {},
        }}
        onClick={preventDefault}
      >
        <AppBar sx={{ height: "75px", backgroundColor: "#FFD743" }}>
          <List sx={{ marginTop: "-30px" }}>
            <ListItem>
              <NavLink
                to="/"
                exact
             
                activeClassName="active"
                style={{
                  color: "grey",
                  textDecoration: "none",
                  marginRight: "30px",
                }}
              >
                <Button style={{ color: "black"  }} >
                ASDFGHJKLASDFGHJK

                </Button>
              </NavLink>
              

           
             
              
              
              <NavLink
                to="/More"
                underline="hover"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "30px",
                }}
              >
                <Button style={{ color: "black" }}>
                  More
                </Button>{" "}
              </NavLink>
            </ListItem>
          </List>
        </AppBar>
        <Routes>
          <Route exact path="/" element={<AAA />} />
          <Route exact path="/App" element={<App />} />
          <Route exact path="/Account" element={<Acc />} />
          <Route exact path="/Log" element={<Loog />} />
          <Route exact path="/App1" element={<App1 />} />
          <Route exact path="/Menu" element={<Menu />} />
          <Route exact path="/New" element={<New />} />
          <Route exact path="/Atm1" element={<Atm1 />} />
          <Route exact path="/Atm2" element={<Atm2 />} />
          <Route exact path="/Index1" element={<ATMI/>} />
          <Route exact path="/More" element={<More/>} />
          <Route exact path="/Application" element={<Acc1/>} />
          <Route exact path="/Accbalance" element={<Acc2/>} />
          <Route exact path="/Atm3" element={<Atm3 />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
