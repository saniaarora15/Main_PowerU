import React, { useContext } from "react";
import logo from './logo.png';
import './NavbarAC.css'
const NavbarAC = () => {
  
  return (
    <>
      <div className="admin-page">
      <nav className="admin-navbar">
      <img
              alt=""
              src={logo}
              width="50"
              height="50"
              style={{marginTop:"0%", marginRight:"1%",marginLeft:"1%"}}
            />
       
          PowerU
      
        </nav>
        </div>
    </>
  );
};

export default NavbarAC;