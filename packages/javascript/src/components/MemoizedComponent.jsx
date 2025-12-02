import { useMemo, useState } from 'react'
import expensiveCalculation from '../utils'

function MemoizedComponent({ number, counter }) {
    "use no memo";
    // "use memo";

    const [numberOfExpensiveCalculationCalls, setNumberOfExpensiveCalculationCalls] = useState(0);

    const triggerExpensiveCalculation = () => {
        setNumberOfExpensiveCalculationCalls(numberOfExpensiveCalculationCalls + 1);
        return expensiveCalculation(number, "MemoizedComponent");
    }

    const memoizedValue = useMemo(() => {
      return triggerExpensiveCalculation()
    }, [number])

    // const memoizedValue = triggerExpensiveCalculation()
  
    return (
      <div className="demo-box memoized">
        <h3>With useMemo</h3>
        <p className="value">Counter: {counter.toLocaleString()}</p>
        <p className="value">Result: {memoizedValue.toLocaleString()}</p>
        <p className="value"> Invocations: {numberOfExpensiveCalculationCalls.toLocaleString()}</p>
        <p className="note">✅ Only recalculates when number changes</p>
      </div>
    )
}

export default MemoizedComponent