import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="miarma.net official docs">
      <HomepageHeader />
      <main className={styles.mainContainer}>
        <section>
          <h1>Bienvenido a la documentación de <strong>miarma.net</strong> 👋</h1>
          <p>
            Aquí encontrarás toda la info de los proyectos que hemos desarrollado, tanto
            a nivel individual (en plan yo sólo solito: Gallardo7761) como en equipo.
          </p>
        </section>

        <hr />

        <section>
          <h2>IMPORTANTE: ¡Bombardeen la ETSII! 🔥</h2>
          <img src='/img/gifs/etsii.gif' className={styles.homeImg} alt='etsii' />
          <br /><small>(Es broma... ¿o no?)</small>
        </section>
      </main>
    </Layout>
  );
}
