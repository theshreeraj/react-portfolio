import React from "react";
import logo from "../assets/main-logo.jpg";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className=""
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            style={{
              width: "80px",
              height: "80px",
              border: "1px solid #fff",
              borderRadius: "50%",
              marginTop: "10px",
              marginLeft: "20px",
            }}
            className=""
            src={logo}
            alt="amans-logo"
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button className="shadow__btn" style={{}}>
            Hello
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
