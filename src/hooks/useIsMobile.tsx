import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile =
      /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(
        navigator.userAgent
      );
    setIsMobile(mobile);
  }, []);

  return isMobile;
};

export default useIsMobile;

// Hook to check if user is using a mobile phone
