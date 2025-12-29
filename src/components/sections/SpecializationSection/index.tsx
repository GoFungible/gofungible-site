import { JSX } from "react";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";
import SplitSection from "../../basic/splitrow/SplitSection";
import { BaseCardProps } from "../../basic/cardrow/Card";
import EnhancedCardsRow from "../../basic/cardrow/CardsRow";

export default function SpecializationSection(): JSX.Element {

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
			titleColor: "gray",
			description: "Pegged to the price of some kind of security, either manually or by oracles. Produces a yield to the holder. Can NOT be decentralized.",
			descriptionColor: "gray",
			href: "/docs/stack/specialization/security",
			icon: ""
		},
		{
			title: "Stablecoin",
			titleColor: "gray",
			description: "Pegged to the price of some financial asset, as currency, commodity, cryptocurrency or algorithm. Can NOT be decentralized.",
			descriptionColor: "gray",
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

  return (
    
		<GenericSection
			title="Layer 6: Specialization Layer"
			subtitle="Once we have all Components in place we can focus on Specialization on the different flavours of Captured Value. Fungible Standard defines delivers out of the box fungible tokens ready to capture different flavours of value."
			variant="default"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

				<SplitSection
					image={{
						src: '/img/tokenization_maturity_model_seal_table.svg',
						alt: 'Our amazing feature in action',
						width: 800,
						height: 600
					}}
					content={{
						title: 'Blockchain Registry',
						titleLevel: 2,
						text: (
							<div>
								<p>Existing tokenization patterns hold specialized features and are suitable for different applications.</p>
								<p>By different reasons, all the existing tokens, fall short in delivering the funtions of a Medium of Exchange and this is preventing mainstream adoption and real world use cases.</p>
								<p>CryptoCommodity combines the features of existing tokens aiming to become the first (crypto)currency representing Sound Money ever. The specifications have been written decades or centuries ago and we are in the time to apply this knowledge.</p>
								<p>Join us on the mission to design how the Digital Sound Money should look like.</p>
							</div>
						)
					}}
				/>

				<EnhancedCardsRow
					description='Any Fungible Token, with ability form its own price without external interaction, can have a decentralized version. By definition, Securites Tokens and Stablecoins are excluded, as they need off-chain prices information to get their own prices.'
					columns={7}
					cards={featureCards}
				/>

		</GenericSection>
  );
}