import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hola = ({ amigo }) => {
  return (
    <h1 className="d-flex justify-content align-center">Hellow {amigo}</h1>
  );
};

export default Hola;
