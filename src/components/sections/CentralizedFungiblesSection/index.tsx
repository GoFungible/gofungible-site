// In your .mdx file
import { JSX } from 'react';

import styles from './styles.module.css';
import CardsRow from '../../basic/cardrow/CardsRow';
import GenericSection from '../../basic/GenericSection';
import { BaseCardProps } from '../../basic/cardrow/Card';
import SplitSection from '../../basic/splitrow/SplitSection';

// Example with typed cards array
const featureCards: BaseCardProps[] = [
  {
    title: "Fidelization",
    description: "Distributed by the issuer to grant customers consideration. Backed by especulative value. Can be decentralized.",
    href: "/docs/stack/specialization/fidelization",
		icon: ""
  },
	{
    title: "Memecoin",
    description: "Representing a character or an idea, motivation or proposal. Backed by especulative value. Can be decentralized.",
    href: "/docs/stack/specialization/memecoin",
		icon: ""
  },
  {
    title: "RepuToken",
    description: "Representing the reputation of the issuer, a person, company or institution. Backed by especulative value. Can be decentralized.",
    href: "/docs/stack/specialization/reputoken",
		icon: ""
  },
  {
    title: "Utility Token",
    description: "Typically fueling an ecosystem capturing the value of a key utility. Can be decentralized.",
    href: "/docs/stack/specialization/utility",
		icon: ""
  },
  {
    title: "Security Token",
    description: "Pegged to the price of some kind of security, either manually or by oracles. Produces a yield to the holder. Can NOT be decentralized.",
    href: "/docs/stack/specialization/security",
		icon: ""
  },
  {
    title: "Stablecoin",
    description: "Pegged to the price of some financial asset, as currency, commodity, cryptocurrency or algorithm. Can NOT be decentralized.",
    href: "/docs/stack/specialization/stablecoin",
		icon: ""
  },
	{
    title: "Crommodity",
    description: "Works as medium of exchange on its own market by capturing the price of the asset. Must be decentralized. Unfeasible in Layer 2.",
    href: "/docs/stack/specialization/crommodity",
		icon: ""
  },
];

export default function CentralizedFungiblesSection(): JSX.Element {
  return (
    
		<GenericSection
			title="Centralized Fungibles (2025+)"
			subtitle="At current state of arts, a few fungible types have been identified and implemented. However, despite mainstream expectations and marketing slogans, decentralization remains a challenge."
			variant="default"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

			<CardsRow
				columns={7}
				cards={featureCards}
			/>

			<SplitSection
				image={{
					src: 'https://media.istockphoto.com/id/476958697/es/vector/lobo-de-historieta-sheeps-ropa.jpg?s=612x612&w=0&k=20&c=G4fPi4uBIalpom5lxD7V8o0xa4FpVBxxhEb1HRfdhhk=',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'The Identity Crisis',
					titleLevel: 2,
					text: (
						<div>
							<p>In his 16th aniversary, blockchain industry looks immersed on his own adolescence crisis. It gets proposals from all directions and is confused about what it wants to become.</p>
							<p>With several hundreds of blockchain networks, more than 1700 exchanges, 200 wallets and more thn 1300 ERC standards and the lack of role models and references the industry looks lost into the confusion which is the perfect climate for dishonest behaviour.</p>
							<p>Industry speaks about decentralizations, interoperability and its own technological idioms with poor usability and users are messed up with technological concepts instead of perceived value.</p>
							<p>Scammers and fake issuers take advantage of the uncertainties. Distrust spreads on the users community. Dissapointment takes over the industry.</p>
						</div>
					)
				}}
				reverse={true}
				spacing="large"
			/>

		</GenericSection>

  );
}
