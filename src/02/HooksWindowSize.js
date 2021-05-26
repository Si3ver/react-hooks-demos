// Hook
import React from 'react'

const getSize = () => {
  return window.innerWidth > 1000 ? "large" : "small";
}

const useWindowSize = () => {
  const [size, setSize] = React.useState(getSize());
  React.useEffect(() => {
  const handler = () => {
      setSize(getSize())
    };
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);
  
  return size;
};


export default () => {
  const size = useWindowSize();
  return (<div>Current Window Size: {size}</div>);
};
