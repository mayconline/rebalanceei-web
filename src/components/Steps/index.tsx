import Image from 'next/image';
import { Button } from '../Button';
import styles from './steps.module.scss';

export function Steps() {
  return (
    <section className={styles.wrapper}>
      <h3>Nunca foi tão fácil rebalancear sua carteira</h3>
      <div className={styles.container}>
        <article>
          <Image
            src="/assets/img-step-one.svg"
            alt="Crie uma carteira"
            width={275}
            height={237}
            priority
          />
          <p>Crie uma carteira</p>
          <span>Dando um nome a ela como preferir</span>
        </article>
        <article>
          <Image
            src="/assets/img-step-two.svg"
            alt="Adicione seus ativos"
            width={275}
            height={237}
            priority
          />
          <p>Adicione seus ativos</p>
          <span>Definindo uma nota para cada ativo</span>
        </article>
        <article>
          <Image
            src="/assets/img-step-three.svg"
            alt="Rebalanceeie sua carteira"
            width={275}
            height={237}
            priority
          />
          <p>Rebalanceeie sua carteira</p>
          <span>Baseado na sua nota para o ativo</span>
        </article>

        <aside>
          <Button />
        </aside>
      </div>
    </section>
  );
}
