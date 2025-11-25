import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/sections/HomepageFeatures';
import Heading from '@theme/Heading';

//import 'bootstrap/dist/css/bootstrap.css';

import styles from './index.module.css';
import ValueChainSection from '../components/sections/ValueChainSection';
import SoundMoneySection from '../components/sections/SoundMoneySection';
import DecentralizationSection from '../components/sections/DecentralizationSection';
import WhySection from '../components/sections/WhySection';
import FAQTabFolderSection from '../components/sections/FAQTabFolderSection';
import WhyTabFolderSection from '../components/sections/WhyTabFolderSection';
import EnhancedCardRowSection from '../components/sections/EnhancedCardRowSection';
import SpliRightRowSection from '../components/sections/SpliRightRowSection';
import SplitLeftSectionSection from '../components/sections/SpliLefttRowSection';
import SplitRightEnhancedSectionSection from '../components/sections/SpliRightRowEnhancedSection';
import SplitLeftEnhancedSectionSection from '../components/sections/SpliLefttRowEnhancedSection';
import CardRowSection6 from '../components/sections/CardRowSection6';
import LandingCardRowSection from '../components/sections/LandingCardRowSection';
import EcosystemSection from '../components/sections/EcosystemSection';
import FeaturesSection from '../components/sections/FeaturesSection';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
				<WhySection />
				<FAQTabFolderSection />
				<WhyTabFolderSection />
				<FeaturesSection />
				<DecentralizationSection />
				<SoundMoneySection />
				<ValueChainSection />
				<CardRowSection6 />
				<EcosystemSection />
				<SpliRightRowSection  />
				<SplitLeftSectionSection />
				<SplitRightEnhancedSectionSection />
				<SplitLeftEnhancedSectionSection />
				<LandingCardRowSection />
      </main>
    </Layout>
  );
}
