// Expensive calculation function - simulates heavy computation
function expensiveCalculation(n, name) {
    console.log(`${name}`, 'Computing expensive calculation...')
    let result = 0
    for (let i = 0; i < n * 1000000; i++) {
      result += i
    }
    return result
}

export default expensiveCalculation