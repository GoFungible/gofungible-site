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
    href: "/",
		icon: ""
  },
  {
    title: "Fidelization",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
		icon: ""
  },
  {
    title: "RepuToken",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
		icon: ""
  },
  {
    title: "Utility Tokens",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
		icon: ""
  },
  {
    title: "Security Token",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
		icon: ""
  },
  {
    title: "Stablecoin",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
		icon: ""
  },
	{
    title: "Crommodty",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
		icon: ""
  },
];

export default function CentralizedFungiblesSection(): JSX.Element {
  return (
    
		<GenericSection
			title="Centralized Fungibles (2025+)"
			subtitle="Principles are nothing if they are not etched in stone. Immutability Layer provides a permanent mechanism to host the Token Features that can be assembled in Fungible Token's Contract."
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
