import { useCallback } from 'react';
import styles from './button.module.scss';
import { gtagReportConversion, URL_CONVERT } from '../../utils/gtag';
import * as fbq from '../../utils/fbpixel';

export function Button() {
  const handleClick = useCallback(() => {
    fbq.event('ClickInstallButton');
    gtagReportConversion();
    window.open(URL_CONVERT);
  }, []);

  return (
    <div className={styles.container}>
      <button title="Intalar agora" onClick={handleClick}>
        Instalar agora
      </button>
    </div>
  );
}
