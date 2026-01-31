import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";
import { BaseCardProps } from "../../basic/cardrow/Card";
import CardsRow from '../../basic/cardrow/CardsRow';

export default function InteropSection(): JSX.Element {


	const featureCards: BaseCardProps[] = [
		{
			variant: "primary",
			image: "/img/interop.png",
			imageHeight: "120px",
			title: "Interchain Communication",
			description: "With hundreds of DLT networks with different consensus protocols, gas fees or ecosystems is necessary to understand which ones comply with value-based cryptocommodities.",
			buttonText: "View Communication",
			href: "/docs/stack/interop/communication",
		},
		{
			variant: "primary",
			image: "/img/relayer.png",
			imageHeight: "120px",
			title: "Interoperability Agents",
			description: "When issuing your value-based cryptocommodities it is necessary to understand what CEX, HEX, DEX, FEX, Liquidity Aggregators comply with the Trading, Operations and Distribution.",
			buttonText: "View Agents",
			href: "/docs/stack/ecosystem/exchanges",
		},
		{
			variant: "primary",
			image: "/img/interop-patterns.png",
			imageHeight: "120px",
			title: "Interoperability Patterns",
			description: "Despite there are more than 1 hundred of wallets in offer in the crypto market, there is not a simple $20 HW wallet, as a Garage Door Opener, to pay in real markets and this is preventing massification.",
			buttonText: "View Patterns",
			href: "/docs/stack/interop/patterns",
		},
	];

  return (
    
			<GenericSection
				title="Layer 5: Interoperability Layer"
				subtitle="The cornerstone for blockchain adoption: blockchains were not designed to communicate which each other, creating a liquidity fragmentation problem and destroying usability. ."
				variant="secondary"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

				<CardsRow
					columns={3}
					cards={featureCards}
					postdescription="With all these ingredients, we build a patterns-backed layer of abstraction on top of existing interoperability agents so issuers can deliver their tokens seamlessly in every EVM-enhanced chain."
				/>

				<SplitSection
				image={{
					src: 'https://www.fungible.work/img/drawings/patterns_erc20_multichain.svg',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'Fungible Interoperability',
					titleLevel: 2,
					text: (
						<div>
							<p>Fungible Interoperability proposes and ERC-20 extension standard to guarantee holders and users integrity of the supply.</p>
							<p>We also provide a hub of interoperability agents so they can be plugged in their token by the issuers.</p>
						</div>
					)
				}}
				buttonLabel="Visit Fungible Interoperablity"
				href="https://www.fungible.work/"
				reverse={false}
				spacing="large"
			/>

			</GenericSection>

  );
}