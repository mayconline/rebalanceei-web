import Link from 'next/link';
import styles from './button.module.scss';

export function Button() {
  return (
    <div className={styles.container}>
      <Link href="https://bit.ly/rebalanceei">
        <button title="Intalar agora">Instalar agora</button>
      </Link>
    </div>
  );
}
