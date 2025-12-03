// Expensive calculation function - simulates heavy computation
function expensiveCalculation(n: number, name: string): number {
    console.log(`${name}`, 'Computing expensive calculation...')
    let result = 0
    for (let i = 0; i < n * 1000000; i++) {
      result += i
    }
    return result
}

export default expensiveCalculation

