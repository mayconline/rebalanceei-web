import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as fbq from '../../utils/fbpixel';

const handleRouteChange = () => {
  fbq.pageview();
};

const FacebookPixel = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    fbq.pageview();

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return children;
};

export default FacebookPixel;
