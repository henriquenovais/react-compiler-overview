import { useState, useMemo } from 'react'
import './App.css'

// Expensive calculation function - simulates heavy computation
function expensiveCalculation(n: number): number {
  console.log('Computing expensive calculation...')
  let result = 0
  for (let i = 0; i < n * 1000000; i++) {
    result += i
  }
  return result
}

// Component that uses useMemo
interface MemoizedComponentProps {
  number: number
}

function MemoizedComponent({ number }: MemoizedComponentProps) {
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(number)
  }, [number])

  return (
    <div className="demo-box memoized">
      <h3>With useMemo</h3>
      <p className="value">Result: {memoizedValue.toLocaleString()}</p>
      <p className="note">✅ Only recalculates when number changes</p>
    </div>
  )
}

// Component that doesn't use useMemo
interface NonMemoizedComponentProps {
  number: number
}

function NonMemoizedComponent({ number }: NonMemoizedComponentProps) {
  const value = expensiveCalculation(number)

  return (
    <div className="demo-box non-memoized">
      <h3>Without useMemo</h3>
      <p className="value">Result: {value.toLocaleString()}</p>
      <p className="note">❌ Recalculates on every render</p>
    </div>
  )
}

function App() {
  const [number, setNumber] = useState<number>(5)
  const [counter, setCounter] = useState<number>(0)

  return (
    <div className="app">
      <div className="header">
        <h1>useMemo Demonstration</h1>
        <p className="subtitle">
          See how useMemo prevents expensive recalculations on every render
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

        <div className="info">
          <p>💡 <strong>Tip:</strong> Open the browser console to see when calculations run!</p>
          <p>When you change the counter, only the non-memoized version recalculates.</p>
        </div>
      </div>

      <div className="demo-container">
        <MemoizedComponent number={number} />
        <NonMemoizedComponent number={number} />
      </div>

      <div className="explanation">
        <h2>How useMemo Works</h2>
        <ul>
          <li>
            <strong>useMemo</strong> memoizes the result of an expensive calculation
          </li>
          <li>
            It only recalculates when its dependencies (in this case, <code>number</code>) change
          </li>
          <li>
            When you click the counter buttons, the component re-renders, but the memoized value
            doesn't recalculate because <code>number</code> hasn't changed
          </li>
          <li>
            The non-memoized version recalculates on <em>every</em> render, even when it's not necessary
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
