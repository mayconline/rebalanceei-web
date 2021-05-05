import Link from 'next/link';
import styles from './footer.module.scss';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div>
        <Link href="https://bit.ly/siga-rebalanceei">
          <image>
            <FaInstagram className={styles.icon} title="Instagram" />
          </image>
        </Link>
        <Link href="http://bit.ly/face-rebalanceei">
          <image>
            <FaFacebook className={styles.icon} title="Facebook" />
          </image>
        </Link>
        <Link href="https://bit.ly/inscreva-rebalanceei">
          <image>
            <FaYoutube className={styles.icon} title="Youtube" />
          </image>
        </Link>
      </div>
      <div>
        <Link href="https://conecta.bio/rebalanceei">
          <span title="@Rebalanceei">@Rebalanceei</span>
        </Link>
      </div>
      <aside>
        <span>
          Google Play e o logotipo do Google Play são marcas registradas da
          Google LLC.
        </span>
      </aside>
    </footer>
  );
}
