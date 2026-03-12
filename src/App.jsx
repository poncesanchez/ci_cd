import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { sum, subtract } from "./utils/math";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const numA = Number(a) || 0;
  const numB = Number(b) || 0;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Contador (usa <code>sum</code>):
        </p>
        <button onClick={() => setCount((c) => sum(c, 1))}>
          count is {count}
        </button>
      </div>
      <div className="card calculator">
        <p>
          Calculadora (usa <code>sum</code> y <code>subtract</code>):
        </p>
        <div className="inputs">
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            aria-label="Primer número"
          />
          <span className="op">y</span>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            aria-label="Segundo número"
          />
        </div>
        <p className="result">
          Suma: <strong>{sum(numA, numB)}</strong>
        </p>
        <p className="result">
          Resta: <strong>{subtract(numA, numB)}</strong>
        </p>
      </div>
    </>
  );
}

export default App;
