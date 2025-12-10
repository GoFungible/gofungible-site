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
    title: "Supply Related Features",
    description: "Ability to create or remove supply.",
    buttonText: "More",
    href: "/docs/stack/immutability",
  },
  {
    variant: "primary",
		icon: <FaMoneyBillTransfer size={120} />,
    title: "Transfer Related Features",
    description: "Operations triggered on token transfers.",
    buttonText: "More",
    href: "/docs/stack/immutability",
  },
  {
    variant: "primary",
		icon: <FaHandshake size={120} />,
    title: "Permit Related Features",
    description: "Allowance provided to third parties",
    buttonText: "More",
    href: "/docs/stack/immutability",
  },
  {
    variant: "primary",
		icon: <MdOutlineSecurity size={120} />,
    title: "Security Related Features",
    description: "Such as token ownership.",
    buttonText: "More",
    href: "/docs/stack/immutability",
  },
]

export default function ImmutabilitySection(): JSX.Element {
  return (
    
			<GenericSection
				title="Layer 4: Immutability Layer"
				subtitle="Once principles have been defined, we have a guideline to decide the right configuration of Token Features to be included in the Fungible Token's Contract."
				variant="secondary"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

			<SplitSection
				image={{
					src: 'https://thumbs.dreamstime.com/b/ancient-greek-text-inscriptions-stone-wall-background-letters-carved-248084136.jpg',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'Composition of Immutable Master Contracts',
					titleLevel: 2,
					text: (
						<div>
							<p>Contracts are created to be enforced. Both parties benefit for clear principles writen on stone. <a href="https://eips.ethereum.org/EIPS/eip-2535" target="_blank">ERC-2535</a> provides the technical infrastructure to have Master Agreements on chain in a immutable manner. These Master Agreements are replicated along all tht nodes of the blockchain. they provide a foundation to have composable contract features.</p>
							<p><a href="https://compose.diamonds/" target="_blank">Compose</a>, built-on top of <a href="https://eips.ethereum.org/EIPS/eip-2535" target="_blank">ERC-2535</a>, brings the creation of immutable contacts by composition of Master Agreements features.</p>
							<p>Both working together provide a technical foundation to enforce, out of the box, the design principles described in Layer 3 .</p>
						</div>
					)
				}}
				reverse={true}
				spacing="large"
			/>

			<CardsRow
				description='Below are the categories of ERC-20 Immutable Features composable as Master Agreements:'
				columns={3}
				cards={fungibleFeatures}
			/>

			</GenericSection>

  );
}