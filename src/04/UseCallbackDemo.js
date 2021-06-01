import { useState, useCallback } from 'react';

export default function UseCallbackDemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  /** 使用 useCallback 缓存 */
  const handleIncrement1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  /** 不使用 useCallback 缓存 */
  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  /** 使用 useCallback 缓存 */
  const handleIncrement3 = useCallback(() => {
    setCount3((prev) => prev + 1);
  }, []);

  /** 使用 useCallback 缓存 */
  const handleIncrement4 = () => {
    setCount4((prev) => prev + 1);
  };

  return (
    <>
      <div>
        {count1}
        {' '}
        -
        {' '}
        {count2}
        {' '}
        -
        {' '}
        {count3}
        {' '}
        -
        {' '}
        {count4}
      </div>
      <button onClick={handleIncrement1}>plusCount1</button>
      <button onClick={handleIncrement2}>plusCount2</button>
      <button onClick={handleIncrement3}>plusCount3</button>
      <button onClick={handleIncrement4}>plusCount4</button>
    </>
  );
}
