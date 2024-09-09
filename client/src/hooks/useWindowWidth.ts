import {useState, useEffect} from 'react'

export const useWindowWidth = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 1199);
      };
  
      // Agrega el event listener cuando el componente se monta
      window.addEventListener('resize', handleResize);
  
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return { isDesktop }
}