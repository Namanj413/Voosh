import "./Navbar.scss";
import React from "react";
import logo from "../../images/logo.webp";

const Navbar = () => {

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
 
    window.location.reload(false);
  };

  return (
    <>
      <div className="navbar_container">
        <div>
          <img src={logo} className="voosh_logo" />
        </div>    
      </div>
    </>
  );
};

export default Navbar;
