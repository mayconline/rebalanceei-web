import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID, GADS_TRACKING_ID } from '../utils/gtag';
import { FB_PIXEL_ID } from '../utils/fbpixel';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${GA_TRACKING_ID}');
              gtag('config', '${GADS_TRACKING_ID}');
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
              fbq('track', 'ClickInstallButton');
          `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>

          <meta name="theme-color" content="#000" />
          <meta
            name="description"
            content="Quer rebalancear sua carteira de investimentos e acompanhar a rentabilidade das sua ações?"
          />
          <meta name="robots" content="index, follow" />

          {/**Meta Face */}
          <meta property="og:locale" content="pt_BR" />
          <meta
            property="og:title"
            content="Rebalanceei - Rebalanceamento de Carteira de Investimentos"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Quer rebalancear sua carteira de investimentos e acompanhar a rentabilidade das sua ações?"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/apinodeteste/image/upload/v1620255748/Rebalanceei/rebalanceei-banner_efatae.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://res.cloudinary.com/apinodeteste/image/upload/v1620255748/Rebalanceei/rebalanceei-banner_efatae.png"
          />
          <meta property="og:url" content="https://rebalanceei.vercel.app" />
          <meta property="og:site_name" content="Rebalanceei" />
          <meta property="fb:admins" content="108280398063385" />

          {/** Meta twitter */}
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="Quer rebalancear sua carteira de investimentos e acompanhar a rentabilidade das sua ações?"
          />
          <meta
            name="twitter:title"
            content="Rebalanceei - Rebalanceamento de Carteira de Investimentos"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/apinodeteste/image/upload/v1620255748/Rebalanceei/rebalanceei-banner_efatae.png"
          />
          <meta name="twitter:url" content="https://rebalanceei.vercel.app" />

          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
