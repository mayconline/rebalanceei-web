export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GADS_TRACKING_ID = process.env.NEXT_PUBLIC_GADS_ID;
export const URL_CONVERT = process.env.NEXT_PUBLIC_URL_CONVERT;

export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const gtagReportConversion = (url: any) => {
  var callback = function () {
    if (typeof url != 'undefined') {
      window.location = url;
    }
  };

  window.gtag('event', 'conversion', {
    send_to: 'AW-431819378/xkPjCIuQkZECEPKU9M0B',
    event_callback: callback,
  });
  return false;
};
