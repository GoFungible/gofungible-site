import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";
import CardsRow from '../../basic/cardrow/CardsRow';

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";
import { BaseCardProps } from "../../basic/cardrow/Card";

import { HiMiniPrinter } from "react-icons/hi2";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const fungibleFeatures: BaseCardProps[] = [
  {
    variant: "primary",
		icon: <HiMiniPrinter size={120} />,
    title: "Supply Features",
    description: "Ability to create or remove supply.",
    buttonText: "More",
    href: "/docs/stack/immutability/supply",
  },
  {
    variant: "primary",
		icon: <FaMoneyBillTransfer size={120} />,
    title: "Transfer Features",
    description: "Operations triggered on token transfers.",
    buttonText: "More",
    href: "/docs/stack/immutability/transfer",
  },
  {
    variant: "primary",
		icon: <FaHandshake size={120} />,
    title: "Permit Features",
    description: "Allowance provided to third parties",
    buttonText: "More",
    href: "/docs/stack/immutability/permit",
  },
  {
    variant: "primary",
		icon: <MdOutlineSecurity size={120} />,
    title: "Security Features",
    description: "Such as token ownership.",
    buttonText: "More",
    href: "/docs/stack/immutability/security",
  },
]

// https://www.oldest.org/artliterature/oldest-written-contracts/
export default function ImmutabilitySection(): JSX.Element {
  return (
    
			<GenericSection
				title="Layer 4: Immutability Layer"
				subtitle="Principles are nothing if they are not etched in stone. Immutability Layer provides a permanent mechanism to host the Token Features that can be assembled in Fungible Token's Contract."
				variant="default"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

			<SplitSection
				image={{
					src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnyGHBbImpFUlDnz64c6NR-EGoGRvBMRDpg&s',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'Composition of Immutable Master Contracts',
					titleLevel: 2,
					text: (
						<div>
							<p>Contracts are created to be enforced. Both parties benefit from clear principles written in stone. Diamond Standard <a href="https://eips.ethereum.org/EIPS/eip-2535" target="_blank">(ERC-2535)</a> provides the technical infrastructure to have Master Agreements on chain in a immutable manner. These Master Agreements are replicated along all tht nodes of the blockchain providing a foundation to have composable contract features.</p>
							<p><a href="https://compose.diamonds/" target="_blank">Compose Library</a>, built-on top of <a href="https://eips.ethereum.org/EIPS/eip-2535" target="_blank">Diamond Standard</a>, brings the assembly of immutable contacts by composition of Master Agreements features.</p>
							<p>Both working together provide a technical foundation to enforce, out of the box, the design principles described in Layer 3.</p>
							<p>Fungible Standard relies on immutable technologies to guarantee the agreed contracts in compliance with the compromised principles.</p>
						</div>
					)
				}}
				buttonLabel="How this works?"
				href="/docs/stack/immutability/immutability"
				reverse={true}
				spacing="large"
			/>


{/*
			<CardsRow
				description='Below are the categories of ERC-20 Immutable Features composable as Master Agreements:'
				columns={3}
				cards={fungibleFeatures}
			/>
*/}

			</GenericSection>

  );
}