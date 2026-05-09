import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: '⬡',
    title: 'Biometric Security',
    description:
      'Multi-factor biometric authentication fused with Trusted Execution Environments (TEE). Private keys never leave the device. Threshold signatures require multiple distributed key fragments — no single point of failure.',
  },
  {
    icon: '◈',
    title: 'UDSX Settlement Layer',
    description:
      'Low-volatility wholesale settlement protocol. TWAP-referenced pricing over 15-minute windows eliminates flash-crash exposure. Atomic escrow ensures both counterparties are protected on every operation.',
  },
  {
    icon: '⬡',
    title: 'Regulatory-Grade Compliance',
    description:
      'KYC/AML Tier-3 and FATF standards built into the protocol layer — not bolted on. On-chain audit proofs available for regulatory inspection across 34 jurisdictions without compromising user privacy.',
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionLabel}>Core Protocol</div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
