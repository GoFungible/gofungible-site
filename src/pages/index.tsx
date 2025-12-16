import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import EcosystemSection from '../components/sections/EcosystemSection';
import LayersSection from '../components/sections/LayeredSection/LayersSection';
import StandardizationSection from '../components/sections/StandardizationSection';
import PrinciplesSection from '../components/sections/PrinciplesSection';
import ImmutabilitySection from '../components/sections/ImmutabilitySection';
import InteropSection from '../components/sections/InteropLayer';
import SpecializationSection from '../components/sections/SpecializationSection';
import ValueChainSection from '../components/sections/ValueChainSection';
import DocHeader from '../components/headers/DocHeader/DocHeader';
import EpicFailSection from '../components/sections/EpicFailSections';
import CentralizedFungiblesSection from '../components/sections/CentralizedFungiblesSection';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();



  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

			<DocHeader
				title="Fungible Standard"
				subtitle="An Open Source Framework to build reusable onchain decentralized immutable interoperable Fungible Tokens that can be trusted by millions. "
				description="Simplicity is the ultimate sophistication"
				primaryCta={{
					text: "Learn More",
					href: "/docs/stack/immutability/immutability"
				}}
				secondaryCta={{
					text: "Github",
					href: "https://github.com/GoFungible"
				}}
				//imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"  // Side image
				//imageAlt="Side content"
				backgroundImageSrc="https://t3.ftcdn.net/jpg/12/00/36/52/360_F_1200365289_EjvAS2WLx26KOlqOCx71zdEUvjhNEncM.jpg"  // Background image
				backgroundImageOpacity={0.7}  // Controls background image visibility
				layout="left"
				background="transparent"  // Use transparent since we have background image
				showBackgroundOverlay={true}
				padding='large'
			/>

			<main>
				<EpicFailSection />
        <LayersSection />
				<EcosystemSection />
				<StandardizationSection />
				<CentralizedFungiblesSection />
				<PrinciplesSection />
				<ImmutabilitySection />
				<InteropSection />
				<SpecializationSection />
				<ValueChainSection />
      </main>

    </Layout>
  );
}
