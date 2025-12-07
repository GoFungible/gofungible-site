// In your .mdx file
import { JSX } from 'react';

import styles from './styles.module.css';
import CardsRow from '../../basic/cardrow/CardsRow';
import { BaseCardProps } from '../../basic/cardrow/Card';
import GenericSection from '../../basic/GenericSection';

// Example with typed cards array
const mandatoryPrnciples: BaseCardProps[] = [
  {
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
		imageHeight: "120px",
    title: "1. Capture Value Faithfully",
    description: "Tokens are not ponzi schemas. Whether captured value is speculative, reputational, utility, a price or intrinsinc (Layer 6), value must be captured into the token in an faithfull way. At any moment, token's price, must reflect market valuation of captured value.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/1317/1317755.png",
		imageHeight: "120px",
    title: "2. Protect Holders Value",
    description: "Token operations cannot compromise holders piece of captured value neither by manipulation of the issuer (Value Integrity) nor by interference of external agents (Token Security). The Platform must minimise the risk of Value disruption and provide recovery mechanisms.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "/img/decentralization.webp",
		imageHeight: "120px",
    title: "3. Make Access to Value Friendly",
    description: "Token issuer should make value operations and services friendly, which includes multichain availability, chain abstraction, usage of standards",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/1317/1317755.png",
		imageHeight: "120px",
    title: "4. Token Holders must be Informed",
    description: "Token Holders must be Informed beforehand on all operations performed to the token affecting them. Investor and users need fluid and trustfull information. This includes a requirement of Transparency. We also must include configurable reports with enabled interoperability formats between servers.",
    buttonText: "More",
    href: "/",
  },
];
const optionalPrnciples: BaseCardProps[] = [
  {
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
		imageHeight: "120px",
    title: "Privacy",
    description: "The level of privacy is determined by the underlying networks where the token is deployed. This is a configuration issue for the Token Issuer. Privacy on token holders must not be in jeopardy with Transparency on token operations",
    buttonText: "More",
    href: "/",
  },
	{
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/8226/8226075.png",
		imageHeight: "120px",
    title: "Compliance",
    description: "Different juristictions apply different levels of compliance. the token issuer must have the tools, out of the box, to decide what level of compliance is suitable for his token.",
    buttonText: "More",
    href: "/",
  },
];

export default function PrinciplesSection(): JSX.Element {
  return (
    
		<GenericSection
			title="Layer 3: Principles Layer"
			subtitle="The Principles for Quality Fungible Tokens make up an Abstraction Layer, guaranteeing that tokens deliver the Foundational Principles of Blockchain. Further on, these principles will spawn a checklist of requirements."
			variant="default"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

			<CardsRow
				description='... 4 principles are mandatory...'
				columns={3}
				cards={mandatoryPrnciples}
			/>

			<CardsRow
				description='... 2 principles are determined by the Token Issuer...'
				columns={3}
				cards={optionalPrnciples}
			/>

		</GenericSection>

  );
}
