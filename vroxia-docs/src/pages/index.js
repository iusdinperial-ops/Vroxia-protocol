import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.badge}>v1.0 — Institutional Grade</div>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.ctaPrimary)}
            to="/docs/intro">
            Enter the Bunker
          </Link>
          <Link
            className={clsx('button button--lg', styles.ctaSecondary)}
            to="/docs/udsx">
            UDSX Protocol
          </Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>34</span>
            <span className={styles.statLabel}>FATF Jurisdictions</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>&lt; 2s</span>
            <span className={styles.statLabel}>Settlement Finality</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>102%</span>
            <span className={styles.statLabel}>Min. Collateral</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>±0.15%</span>
            <span className={styles.statLabel}>Price Tolerance</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Vroxia Protocol — Official Documentation"
      description="Next-generation Fintech Infrastructure and Biometric Security. Official documentation for Vroxia Protocol and the UDSX wholesale settlement asset.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
