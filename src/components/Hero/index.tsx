import Image from 'next/image';
import { Button } from '../Button';
import { GPlayButton } from '../GPlayButton';
import styles from './hero.module.scss';

export function Hero() {
  return (
    <section className={styles.wrapper}>
      <img src="/assets/bg-hero.svg" alt="bg-color" />
      <header>
        <GPlayButton />
      </header>
      <main className={styles.container}>
        <div>
          <h1>
            Quer <strong>rebalancear</strong> sua carteira e acompanhar a{' '}
            <strong>rentabilidade</strong> das suas <strong>ações</strong>?
          </h1>
          <h2>
            Utilize a estratégia mais usada pelos Buy and Hold para
            rebalanceamento de carteira
          </h2>
          <Button />
        </div>

        <div>
          <Image
            src="/assets/mockup-phone.svg"
            alt="Mockup rebalanceei"
            width={380}
            height={700}
            priority
          />
        </div>
      </main>
    </section>
  );
}
