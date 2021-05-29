import { useState } from 'react';

function CountLabel({ count }) {
  console.log('execute CountLabel', count);
  const color = count > 10 ? 'red' : 'blue';
  return <span style={{ color }}>{count}</span>;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('execute Counter');
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <CountLabel count={count} />
      </button>
    </div>
  );
}
