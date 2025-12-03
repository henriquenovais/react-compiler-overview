import { useMemo } from 'react'
import expensiveCalculation from '../utils'

interface MemoizedComponentProps {
  number: number
}

function MemoizedComponent({ number }: MemoizedComponentProps) {
// function MemoizedComponent({ number, counter }: MemoizedComponentProps) {
    "use no memo";
    // "use memo";

    const memoizedValue = useMemo(() => {
      return expensiveCalculation(number, "MemoizedComponent");
    }, [number])

    // const memoizedValue = expensiveCalculation(number, "MemoizedComponent")

    return (
        <div className="demo-box memoized">
        <h3>With useMemo</h3>
        <p className="value">Result: {memoizedValue.toLocaleString()}</p>
        {/* <p className="value">Counter: {counter.toLocaleString()}</p> */}
        <p className="note">✅ Only recalculates when number changes</p>
        </div>
    )
}

export default MemoizedComponent

