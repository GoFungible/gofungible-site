import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import WhyTabFolderSection from '../components/sections/WhyTabFolderSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import SpliRightRowSection from '../components/sections/SpliRightRowSection';
import SplitLeftSection from '../components/sections/SpliLefttRowSection';
import EcosystemSection from '../components/sections/EcosystemSection';
import ValueChainSection from '../components/sections/ValueChainSection';
import MediumHeader from '../components/headers/MediumHeader/MediumHeader';
import EpicFailSection from '../components/sections/EpicFailSection';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

			<MediumHeader />
      
			<main>
				<br/>
				<br/>
				<EpicFailSection />
				<br/>
				<br/>
				<WhyTabFolderSection />
				<FeaturesSection />
				<br/>
				<SpliRightRowSection  />
				<br/>
				<br/>
				<SplitLeftSection />
				<br/>
				<br/>
				<ValueChainSection />
				<br/>
				<EcosystemSection />
				<br/>
      </main>

    </Layout>
  );
}
