import { useMemo } from 'react'
import expensiveCalculation from '../utils'

function MemoizedComponent({ number, counter }) {
    "use no memo";

    // "use memo";

    const memoizedValue = useMemo(() => {
      return expensiveCalculation(number, counter)
    }, [number])

    // const memoizedValue = expensiveCalculation(number, counter)
  
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