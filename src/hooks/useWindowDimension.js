import { useState, useEffect } from 'react';

 getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const resize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return windowDimensions;
}
export default useWindowDimensions