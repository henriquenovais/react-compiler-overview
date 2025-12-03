import expensiveCalculation from '../utils'

function NonMemoizedComponent({ number, counter }) {

  const value = expensiveCalculation(number, "NonMemoizedComponent");

  return (
    <div className="demo-box non-memoized">
      <h3>Without useMemo</h3>
      <p className="value">Counter: {counter.toLocaleString()}</p>
      <p className="value">Result: {value.toLocaleString()}</p>
      <p className="note">❌ Recalculates on every render</p>
    </div>
  )
}

export default NonMemoizedComponent