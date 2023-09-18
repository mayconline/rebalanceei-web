import { Terms } from './Terms';
import { Privacy } from './Privacy';

import styles from './terms.module.scss';
export function TermsPrivacyPolicy() {
  return (
    <main className={styles.main}>
      <Terms />
      <Privacy />
    </main>
  );
}
