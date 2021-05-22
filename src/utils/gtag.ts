export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GADS_TRACKING_ID = process.env.NEXT_PUBLIC_GADS_ID;
export const URL_CONVERT = process.env.NEXT_PUBLIC_URL_CONVERT;

export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const gtagReportConversion = () => {
  window.gtag('event', 'conversion', {
    send_to: 'AW-431819378/xkPjCIuQkZECEPKU9M0B',
  });
  return false;
};
