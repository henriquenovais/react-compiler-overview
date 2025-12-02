import { useState } from 'react';
import expensiveCalculation from '../utils'


function NonMemoizedComponent({ number, counter }) {
    "use no memo";
    // "use memo";

    const [numberOfExpensiveCalculationCalls, setNumberOfExpensiveCalculationCalls] = useState(0);

    const triggerExpensiveCalculation = () => {
        setNumberOfExpensiveCalculationCalls(numberOfExpensiveCalculationCalls + 1);
        return expensiveCalculation(number, "MemoizedComponent");
    }

    const value = triggerExpensiveCalculation()
  
    return (
      <div className="demo-box non-memoized">
        <h3>Without useMemo</h3>
        <p className="value">Counter: {counter.toLocaleString()}</p>
        <p className="value">Result: {value.toLocaleString()}</p>
        <p className="value"> Invocations: {numberOfExpensiveCalculationCalls.toLocaleString()}</p>
        <p className="note">❌ Recalculates on every render</p>
      </div>
    )
  }

export default NonMemoizedComponent