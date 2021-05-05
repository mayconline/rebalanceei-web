import Head from 'next/head';
import styles from '../styles/home.module.scss';

import { Hero } from '../components/Hero';
import { Steps } from '../components/Steps';
import { Feature } from '../components/Feature';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          Rebalanceei - Rebalanceamento de Carteira de Investimentos e
          Acompanhar Rentabilidade das Ações
        </title>
      </Head>

      <main>
        <Hero />
        <Steps />
        <Feature />
        <Announcement />
      </main>

      <Footer />
    </div>
  );
}
