import { useState, useLayoutEffect } from 'react';

const useDimensions = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [size, setSize] = useState(null)
    const breakpoint = 550


    useLayoutEffect(() => {
        const handleResize = () => 
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
          const size = 
          width < breakpoint ? "mobile" : "desktop"
          setSize(size)
        

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      return { width, height, size };
    }

  export default useDimensions