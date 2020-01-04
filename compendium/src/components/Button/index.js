import React from "react";
import './style.css';

function Button({ type = "default", className, children, onClick }) {
  return (
    <button style={{padding: 5, margin: 10}} onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
