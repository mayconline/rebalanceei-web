import { useCallback } from 'react';
import styles from './button.module.scss';
import { gtagReportConversion, URL_CONVERT } from '../../utils/gtag';
import * as fbq from '../../utils/fbpixel';

export function Button() {
  const handleClick = useCallback(() => {
    gtagReportConversion(URL_CONVERT);
    fbq.event('ClickInstallButton');
  }, []);

  return (
    <div className={styles.container}>
      <button title="Intalar agora" onClick={handleClick}>
        Instalar agora
      </button>
    </div>
  );
}
