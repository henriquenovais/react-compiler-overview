import { useMemo } from 'react'
import expensiveCalculation from '../utils'

function MemoizedComponent({ number }) {
// function MemoizedComponent({ number, counter }) {
    "use no memo";
    // "use memo";

    const memoizedValue = useMemo(() => {
      return expensiveCalculation(number, "MemoizedComponent");
    }, [number])

    // const memoizedValue = expensiveCalculation(number, "MemoizedComponent")

    // const memoizedValue = useMemo(() => {
    //   console.log(`Here is my counter: ${counter.toLocaleString()}`)
    //   return expensiveCalculation(number, "MemoizedComponent");
    // }, [number, counter])

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