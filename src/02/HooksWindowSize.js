// Hook
import { useWindowSize } from '../hooks/useWindowSize';

export default () => {
  const size = useWindowSize();
  return (
    <div>
      Current Window Size:
      {' '}
      {size}
    </div>
  );
};
