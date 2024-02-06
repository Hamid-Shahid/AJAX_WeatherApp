import React from "react";
// import MyWorker from "./calculate.worker";

function Calculation() {
  const startCalculations = () => {
    const myWorker = new Worker("./calculate.worker");
    myWorker.onmessage = (event) => {
      alert(event.data);
    };
    myWorker.postMessage("start");
  };

  return (
    <div>
      <button onClick={startCalculations}>Start Calculations</button>
    </div>
  );
}

export default Calculation;
