import * as React from 'react';
import { useState } from 'react';
import useTimeout from '../2-useTimeout/useTimeout';

export default function TimeoutComponent() {
  const [count, setCount] = useState<number>(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <h4>useTimeout</h4>

      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear timeout</button>
      <button onClick={reset}>Reset timeout</button>
    </div>
  );
}
