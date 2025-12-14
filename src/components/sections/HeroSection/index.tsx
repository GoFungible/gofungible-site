import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";
import Hero from "../../headers/Hero/Hero";

export default function HeroSection(): JSX.Element {


	const handlePrimaryClick = () => {
    // Navigate to docs or other page
    window.location.href = '/docs/intro';
  };

  const handleSecondaryClick = () => {
    // Open a modal or external link
    window.open('https://github.com', '_blank');
  };

  return (
    
		<GenericSection
			title="Epic Fail Crypto"
			subtitle="After 15 years in crypto, we cannot hide that the initial To The Moon 🚀 expectations have been broken and that nothing of the promised was delivered."
			variant="default"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

		<Hero
          headline="Build Amazing Documentation"
          subheadline="With Docusaurus & React"
          description="Create beautiful, responsive documentation sites with ease. Our hero component provides three levels of text, optional buttons, and a switchable layout to showcase your product."
          primaryButton={{
            text: "Get Started",
            onClick: handlePrimaryClick
          }}
          secondaryButton={{
            text: "View on GitHub",
            onClick: handleSecondaryClick
          }}
          imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          imageAlt="Documentation example"
          contentPosition="left"
          backgroundColor="#0f172a"
          textColor="#f8fafc"
        />

		</GenericSection>

  );
}