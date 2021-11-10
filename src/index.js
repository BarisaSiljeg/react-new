import React from "react";
import ReactDOM from "react-dom";

const custumStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  backgroundColor: "red",
  fontFamily: "courier",
  height: "20px",
  borderTop: "50px",
  textAlign: "center",
  padinng: "50px"
};

custumStyle.color = "blue";

ReactDOM.render(
  <h1 style={custumStyle}>Hello World!</h1>,
  document.getElementById("root")
);
