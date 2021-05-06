import Image from 'next/image';
import { Button } from '../Button';
import styles from './feature.module.scss';
import { IoWallet, IoTrendingUp } from 'react-icons/io5';
import { FiActivity } from 'react-icons/fi';
import { FaChartPie } from 'react-icons/fa';

export function Feature() {
  return (
    <section className={styles.wrapper}>
      <h4>
        Invista nos seus sonhos com menos risco, controle seus investimentos do
        jeito certo
      </h4>
      <div className={styles.container}>
        <div>
          <article>
            <div>
              <IoWallet className={styles.icon} title="Ativos" />
            </div>
            <main>
              <p>Adicione seus ativos</p>
              <span>
                Quanto maior a nota do ativo, maior sua porcentagem ideal em
                carteira
              </span>
            </main>
          </article>
          <article>
            <div>
              <IoTrendingUp className={styles.icon} title="Rebalancear" />
            </div>
            <main>
              <p>Rebalanceie sua carteira</p>
              <span>
                Saiba quanto falta para chegar em sua porcentagem ideal, baseado
                na sua nota pra o ativo
              </span>
            </main>
          </article>
          <article>
            <div>
              <FiActivity className={styles.icon} title="Variação" />
            </div>
            <main>
              <p>Acompanhe a rentabilidade</p>
              <span>Veja a variação das suas ações em carteira</span>
            </main>
          </article>
          <article>
            <div>
              <FaChartPie className={styles.icon} title="Gráficos" />
            </div>
            <main>
              <p>Gráficos</p>
              <span>
                Temos gráficos que te ajudam a visualizar a composição da sua
                carteira de investimentos
              </span>
            </main>
          </article>

          <aside>
            <Button />
          </aside>
        </div>

        <div>
          <Image
            src="/assets/img-feature-rebalance.svg"
            alt="Mockup tela de rebalanceamento do app rebalanceei"
            width={380}
            height={700}
          />
        </div>
      </div>
    </section>
  );
}
