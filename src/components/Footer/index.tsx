import Link from 'next/link';
import styles from './footer.module.scss';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div>
        <Link href="https://bit.ly/siga-rebalanceei">
          <div>
            <FaInstagram className={styles.icon} title="Instagram" />
          </div>
        </Link>
        <Link href="http://bit.ly/face-rebalanceei">
          <div>
            <FaFacebook className={styles.icon} title="Facebook" />
          </div>
        </Link>
        <Link href="https://bit.ly/inscreva-rebalanceei">
          <div>
            <FaYoutube className={styles.icon} title="Youtube" />
          </div>
        </Link>
      </div>
      <div>
        <Link href="https://conecta.bio/rebalanceei">
          <span title="@Rebalanceei">@Rebalanceei</span>
        </Link>

        <Link href="/terms-privacy-policy">
          <span title="termos of use and privacy policy">
            Termos de Uso e Politicas de Privacidade
          </span>
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
