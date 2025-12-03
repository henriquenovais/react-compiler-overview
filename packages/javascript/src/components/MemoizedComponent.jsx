import { useMemo } from 'react'
import expensiveCalculation from '../utils'

function MemoizedComponent({ number, counter }) {
    // const memoizedValue = useMemo(() => {
    //   numberOfInvocationsRef.current++;
    //   return triggerExpensiveCalculation();
    // }, [number])

    const memoizedValue = expensiveCalculation(number, "MemoizedComponent")

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