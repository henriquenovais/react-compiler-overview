import { useState } from 'react'
import './App.css'
import MemoizedComponent from './components/MemoizedComponent'
import NonMemoizedComponent from './components/NonMemoizedComponent'

function App() {
  "use no memo";

  const [number, setNumber] = useState(5)
  const [counter, setCounter] = useState(0)

  return (
    <div className="app">
      <div className="header">
        <h1>React Compiler Overview</h1>
        <p className="subtitle">
          See how React Compiler can make optimization easier
        </p>
      </div>

      <div className="controls">
        <div className="control-group">
          <label htmlFor="number-input">
            Expensive Calculation Input (affects both):
          </label>
          <input
            id="number-input"
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            min="1"
            max="10"
          />
        </div>

        <div className="control-group">
          <label>Counter (triggers re-renders but shouldn't affect calculation):</label>
          <div className="counter-display">
            <button onClick={() => setCounter(c => c - 1)}>-</button>
            <span className="counter-value">{counter}</span>
            <button onClick={() => setCounter(c => c + 1)}>+</button>
          </div>
        </div>
      </div>

      <div className="demo-container">
        <MemoizedComponent number={number} />
        <NonMemoizedComponent number={number} />
        {/* <MemoizedComponent number={number} counter={counter} />
        <NonMemoizedComponent number={number} counter={counter} /> */}
      </div>
    </div>
  )
}

export default App
