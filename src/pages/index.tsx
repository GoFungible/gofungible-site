import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import EcosystemSection from '../components/sections/EcosystemSection';
import EpicFailSection from '../components/sections/EpicFailSection';
import BackgroundImageHeader from '../components/headers/BackgroundImageHeader';
import LayersSection from '../components/sections/LayeredSection/LayersSection';
import StandardizationSection from '../components/sections/StandardizationSection';
import IdentittyCrisisSection from '../components/sections/IdentittyCrisisSection';
import PrinciplesSection from '../components/sections/PrinciplesSection';
import ImmutabilitySection from '../components/sections/ImmutabilitySection';
import InteropSection from '../components/sections/InteropLayer';
import SpecializationSection from '../components/sections/SpecializationSection';
import ValueChainSection from '../components/sections/ValueChainSection';
import DocHeader from '../components/headers/DocHeader/DocHeader';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

			<BackgroundImageHeader
        backgroundImage="https://t3.ftcdn.net/jpg/12/00/36/52/360_F_1200365289_EjvAS2WLx26KOlqOCx71zdEUvjhNEncM.jpg"
        title="Fungible Standard"
        subtitle="Simplicity is the ultimate sophistication"
        textSide="left"
        overlayOpacity={0.4}
      />




			<main>
				<EpicFailSection />
				<br/>
        <LayersSection />
				<EcosystemSection />
				<StandardizationSection />
				<IdentittyCrisisSection />
				<PrinciplesSection />
				<ImmutabilitySection />
				<InteropSection />
				<SpecializationSection />
				<ValueChainSection />
      </main>

    </Layout>
  );
}
