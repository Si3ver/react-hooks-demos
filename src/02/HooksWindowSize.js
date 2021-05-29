// Hook
import { useWindowSize } from '../hooks/useWindowSize';

export default () => {
  const size = useWindowSize();
  return (
    <div>
      [Custom Hooks] Current Window Size:
      {' '}
      {size}
    </div>
  );
};
