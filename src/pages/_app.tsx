import { AppProps } from 'next/app';
import { Titillium_Web } from '@next/font/google';
import FacebookPixel from '../components/FacebookPixel';

import '../styles/globals.scss';

const twiliumWeb = Titillium_Web({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--titillium-font',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <FacebookPixel>
      <main className={twiliumWeb.variable}>
        <Component {...pageProps} />
      </main>
    </FacebookPixel>
  );
};

export default MyApp;
