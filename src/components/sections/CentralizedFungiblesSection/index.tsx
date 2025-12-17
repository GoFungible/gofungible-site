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
    title: "Memecoin",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/docs/stack/specialization/memecoin",
		icon: ""
  },
  {
    title: "Fidelization",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/docs/stack/specialization/fidelization",
		icon: ""
  },
  {
    title: "RepuToken",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/docs/stack/specialization/reputoken",
		icon: ""
  },
  {
    title: "Utility Tokens",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/docs/stack/specialization/utility",
		icon: ""
  },
  {
    title: "Security Token",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/docs/stack/specialization/security",
		icon: ""
  },
  {
    title: "Stablecoin",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/docs/stack/specialization/stablecoin",
		icon: ""
  },
	{
    title: "Crommodity",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
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
							<p>With several hundreds of blockchain networks, more than 1700 exchanges, 200 wallets and more thn 1300 ERC standards and the lack of role models and references the industry looks lost into the confusion which is the perfect climate for dishonest behaviour..</p>
						</div>
					)
				}}
				reverse={true}
				spacing="large"
			/>

		</GenericSection>

  );
}
