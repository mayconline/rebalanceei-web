import { AppProps } from 'next/app';
import FacebookPixel from '../components/FacebookPixel';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <FacebookPixel>
      <Component {...pageProps} />
    </FacebookPixel>
  );
};

export default MyApp;
