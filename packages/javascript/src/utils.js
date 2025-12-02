// Expensive calculation function - simulates heavy computation
function expensiveCalculation(n, v) {
    console.log('Computing expensive calculation...')
    let result = 0
    for (let i = 0; i < (n+v) * 1000000; i++) {
      result += i
    }
    return result
}

export default expensiveCalculation