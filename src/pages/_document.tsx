import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../utils/gtag';

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
          `,
            }}
          />

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
