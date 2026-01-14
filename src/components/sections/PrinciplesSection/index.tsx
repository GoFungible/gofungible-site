// In your .mdx file
import { JSX } from 'react';

import styles from './styles.module.css';
import CardsRow from '../../basic/cardrow/CardsRow';
import { BaseCardProps } from '../../basic/cardrow/Card';
import GenericSection from '../../basic/GenericSection';

import { IoDiamond } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BsIncognito } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import SplitSection from '../../basic/splitrow/SplitSection';

// Example with typed cards array
const mandatoryPrnciples: BaseCardProps[] = [
  {
    variant: "primary",
		icon: <IoDiamond size={120} />,
    title: "1. Capture Value Faithfully",
    description: "Tokens are not ponzi schemas. Whether captured value is speculative, reputational, utility, a price or intrinsinc (Layer 6), value must be captured into the token in an faithfull way. At any moment, token's price, must reflect market valuation of captured value.",
    buttonText: "More",
    href: "/docs/stack/principles/value",
  },
  {
    variant: "primary",
		icon: <IoShieldCheckmark size={120} />,
    title: "2. Protect Holders Value",
    description: "Token operations cannot compromise holders piece of captured value neither by manipulation of the issuer (Value Integrity) nor by interference of external agents (Token Security). The Platform must minimise the risk of Value disruption and provide recovery mechanisms.",
    buttonText: "More",
    href: "/docs/stack/principles/integrity",
  },
  {
    variant: "primary",
		icon: <MdOutlineMobileFriendly size={120} />,
    title: "3. Friendly Access to Value",
    description: "Token issuer should make value operations and services friendly, which includes multichain availability, chain abstraction, usage of standards",
    buttonText: "More",
    href: "/docs/stack/principles/friendly",
  },
	{
    variant: "primary",
		icon: <TbReportAnalytics size={120} />,
    title: "4. Operational Transparency",
    description: "Token Holders must be Informed beforehand on all operations performed to the token affecting them. Investor and users need fluid and trustfull information. This includes a requirement of Transparency. We also must include configurable reports with enabled interoperability formats between servers.",
    buttonText: "More",
    href: "/docs/stack/principles/disclosure",
  },
];

export default function PrinciplesSection(): JSX.Element {
  return (
    
		<GenericSection
			title="Layer 3: Principles Layer"
			subtitle="Instead of tecnical concepts, users want clear contracts, outcomes and compromises delivered. Is time to turn the arguments around to users point of view."
			variant="secondary"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

			<SplitSection
				image={{
					src: 'https://www.strandbaptist.org.za/uploads/4/2/1/5/4215011/download_2_orig.jpg',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'Principles to the Rescue',
					titleLevel: 2,
					text: (
						<div>
							<p>As Asimov's Laws on Robotics, or Archimedes' Law of the Lever, no system can growth without a clear references as lingua franca for communication between agents and stakeholders.</p>
							<p>The Principles for Quality Fungible Tokens make up an Abstraction Layer, guaranteeing that tokens deliver the Foundational Principles of Blockchain. Further on, these principles will spawn a checklist of requirements.</p>
						</div>
					)
				}}
				reverse={false}
				spacing="large"
			/>

			<CardsRow
				description='... 2 required principles must guarantee token consistency... 2 required principles guarantee market discipline...'
				columns={3}
				cards={mandatoryPrnciples}
			/>

		</GenericSection>

  );
}
