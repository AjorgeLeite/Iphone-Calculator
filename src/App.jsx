import React from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Calculator className="calc" />
      <img className="iphone--img" src="/iphone2.jpg" alt="Iphone" />
    </div>
  );
}

export default App;
