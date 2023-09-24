import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [recentCalculation, setRecentCalculation] = useState("");

  function handleNumClick(value) {
    // debugger
    setInput((prevInput) => prevInput + value);
  }

  function handleOpClick(op) {
    // debugger
    setInput((prevInput) => prevInput + " " + op + " ");
  }

  function handleParenthesisClick(parenthesis) {
    setInput((prevInput) => prevInput + parenthesis);
  }

  function handleClear() {
    setInput("");
    setRecentCalculation("");
  }

  function handleCalc() {
    const result = eval(input);

    console.log("Result: " + result);
    if (result !== Infinity) {
      if (Number.isInteger(result)) {
        setInput(result);
      } else {
        setInput(result.toFixed(2));
      }
      setRecentCalculation(input + " = ");
    } else {
      setInput("Error");
    }
  }
  const buttons = [
    { label: "C", color: "gray", onClick: handleClear },
    { label: "(", color: "gray", onClick: handleParenthesisClick },
    { label: ")", color: "gray", onClick: handleParenthesisClick },
    { label: "/", color: "orange", onClick: handleOpClick },
    { label: "7", onClick: handleNumClick },
    { label: "8", onClick: handleNumClick },
    { label: "9", onClick: handleNumClick },
    { label: "*", color: "orange", onClick: handleOpClick },
    { label: "4", onClick: handleNumClick },
    { label: "5", onClick: handleNumClick },
    { label: "6", onClick: handleNumClick },
    { label: "-", color: "orange", onClick: handleOpClick },
    { label: "1", onClick: handleNumClick },
    { label: "2", onClick: handleNumClick },
    { label: "3", onClick: handleNumClick },
    { label: "+", color: "orange", onClick: handleOpClick },
    { label: "0", onClick: handleNumClick , type: "double size"},
    { label: ".", onClick: handleNumClick },
    { label: "=", onClick: handleCalc },
  ];
  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="prev--calculation">{recentCalculation}</div>
          <div className="result">{input}</div>
        </div>
        <div className="buttons">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`btn ${`btn--${button.color}`} ${button.label === "0" ? "zero-button" : ""}`}
              onClick={() => button.onClick(button.label)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default Calculator;
