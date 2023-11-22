import React from "react";
import { useState, useEffect } from "react";
import logo from "/LogoTG.png";
import { Link } from "react-router-dom";

const SetLenguage = () => {
  return (
    <div className="setLenguage d-flex flex-column justify-content-center">
      <img src={logo} className="img-fluid" alt="" />
      <div className="setButtons item-center">
        <Link to={"/inicio"}>
          <button>Español</button>
          <button>Ingles</button>
          <button>Portugues</button>
        </Link>
      </div>
    </div>
  );
};

export default SetLenguage;
