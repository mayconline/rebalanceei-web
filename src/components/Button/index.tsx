import styles from './button.module.scss';
import { gtagReportConversion, URL_CONVERT } from '../../utils/gtag';
import { useCallback } from 'react';

export function Button() {
  const handleClick = useCallback(() => {
    gtagReportConversion(URL_CONVERT);
  }, []);

  return (
    <div className={styles.container}>
      <button title="Intalar agora" onClick={handleClick}>
        Instalar agora
      </button>
    </div>
  );
}
