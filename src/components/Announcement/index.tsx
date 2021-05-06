import Image from 'next/image';
import { Button } from '../Button';
import styles from './announcement.module.scss';

export function Announcement() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <article>
          <h5>Enquanto uns compram na alta, outros compram na baixa</h5>
          <h6>
            Acompanhe agora mesmo a rentabilidade da sua carteira de
            investimentos
          </h6>
          <aside>
            <Button />
          </aside>
        </article>

        <div>
          <Image
            src="/assets/img-announcement.svg"
            alt="Mockup tela de gráficos e modal de carteiras do app rebalanceei"
            width={556}
            height={491}
            priority
          />
        </div>
      </div>
    </section>
  );
}
