import { useMemo, useRef } from 'react'
import expensiveCalculation from '../utils'

function MemoizedComponent({ number, counter }) {
    "use no memo";
    // "use memo";

    const numberOfInvocationsRef = useRef(0);

    const triggerExpensiveCalculation = () => {
        numberOfInvocationsRef.current++;
        return expensiveCalculation(number, "NonMemoizedComponent");
    }

    const memoizedValue = useMemo(() => {
      numberOfInvocationsRef.current++;
      return triggerExpensiveCalculation();
    }, [number])

    console.log("MemoizedComponent", `Total expensive calculations: ${numberOfInvocationsRef.current.toLocaleString()}`)

    // const memoizedValue = triggerExpensiveCalculation()
  
    return (
      <div className="demo-box memoized">
        <h3>With useMemo</h3>
        <p className="value">Counter: {counter.toLocaleString()}</p>
        <p className="value">Result: {memoizedValue.toLocaleString()}</p>
        <p className="note">✅ Only recalculates when number changes</p>
      </div>
    )
}

export default MemoizedComponent