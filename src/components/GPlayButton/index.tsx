import Link from 'next/link';
import styles from './gplaybutton.module.scss';

export function GPlayButton() {
  return (
    <aside className={styles.gplay}>
      <Link href="https://play.google.com/store/apps/details?id=com.rebalanceei&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img
          alt="Disponível no Google Play"
          src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png"
          width={169}
          height={65}
        />
      </Link>
    </aside>
  );
}
