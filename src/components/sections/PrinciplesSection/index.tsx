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
    description: "Tokens are not ponzi schemas. Whether captured value is speculative, reputational, utility, a price or intrinsinc (Layer 6), the value must be captured into the token in an efficient way. The tokens price, at any moment, must reflect the market valuation of the captured value.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/1317/1317755.png",
		imageHeight: "120px",
    title: "2. Protect Holders Value Integrity",
    description: "Token operations cannot compromise holders piece of captured value neither by manipulation of the issuer (Value Integrity) nor by intereference of external agents (Security). The Platform must minimise the risk of Value disruption.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "/img/decentralization.webp",
		imageHeight: "120px",
    title: "3. Make Value Access Friendly",
    description: "Token issuer should make value operations and services friendly, which includes multichain availability, chain abstraction, usage of standards",
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
    description: "The benefits of Inmutabibility and Interop Layer will enable delivering decentralization out of the box so project can be decentralizaed from inception.",
    buttonText: "More",
    href: "/",
  },
  {
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/1317/1317755.png",
		imageHeight: "120px",
    title: "Transparency",
    description: "Investor and users need fluid and trustfull information about the currency they are using. We must include configurable reports with enabled interoperability formats between servers.",
    buttonText: "More",
    href: "/",
  },
	{
    variant: "primary",
		image: "https://cdn-icons-png.flaticon.com/512/8226/8226075.png",
		imageHeight: "120px",
    title: "Compliance",
    description: "With juristictions increasingly stressing legilation around cryptocurrencies, any crypto must allow optional and configurable compliance mechanisms without reinvnting the wheel.",
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
				description='3 principles are mandatory'
				columns={3}
				cards={mandatoryPrnciples}
			/>

			<CardsRow
				description='3 principles are optional and determined by the Token Issuer'
				columns={3}
				cards={optionalPrnciples}
			/>

		</GenericSection>

  );
}
