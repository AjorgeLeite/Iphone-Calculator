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

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="prev--calculation">{recentCalculation}</div>
          <div className="result">{input}</div>
        </div>
        <div className="buttons">
          <button className="btn btn--gray" onClick={() => handleClear()}>
            C
          </button>
          <button
            className="btn btn--gray"
            onClick={() => handleParenthesisClick("(")}
          >
            (
          </button>
          <button
            className="btn btn--gray"
            onClick={() => handleParenthesisClick(")")}
          >
            )
          </button>
          <button
            className="btn btn--orange"
            onClick={() => handleOpClick("/")}
          >
            /
          </button>

          <button className="btn" onClick={() => handleNumClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleNumClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleNumClick("9")}>
            9
          </button>
          <button
            className="btn btn--orange"
            onClick={() => handleOpClick("*")}
          >
            *
          </button>

          <button className="btn" onClick={() => handleNumClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleNumClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleNumClick("6")}>
            6
          </button>
          <button
            className="btn btn--orange"
            onClick={() => handleOpClick("-")}
          >
            -
          </button>

          <button className="btn" onClick={() => handleNumClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleNumClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleNumClick("3")}>
            3
          </button>
          <button
            className="btn btn--orange"
            onClick={() => handleOpClick("+")}
          >
            +
          </button>

          <button
            className="btn zero-button"
            onClick={() => handleNumClick("0")}
          >
            0
          </button>
          <button className="btn" onClick={() => handleNumClick(".")}>
            .
          </button>
          <button className="btn" onClick={handleCalc}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
export default Calculator;


//component button 
