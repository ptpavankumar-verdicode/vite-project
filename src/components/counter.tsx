import { useCounter } from '../hooks/useCounterHook'

export function Counter() {
  const { count, increment, decrement } = useCounter()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment} disabled={count >= 8}>(+) Increment</button>
      <button onClick={decrement} disabled={count <= -8}>(-) Decrement</button>
    </div>
  )
}
