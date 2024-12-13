import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Hola = ({ amigo }) => {
  const [msj, setMsj] = useState("");

  const handleClick = () => {
    setMsj("(from changed state)");
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="d-flex justify-content align-center">
        Hello {amigo} {msj}
      </h1>
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Change Message
      </button>
    </div>
  );
};

export default Hola;
