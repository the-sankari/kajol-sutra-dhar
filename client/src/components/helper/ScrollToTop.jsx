// components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll without smooth to prevent animation bugs
    console.log(`Scrolling to top for ${pathname}`);
    
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
