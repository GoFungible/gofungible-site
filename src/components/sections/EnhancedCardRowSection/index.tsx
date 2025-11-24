// In your .mdx file
import type { CardProps } from '@site/src/components/basic/card/Card';
import { JSX } from 'react';

import styles from './styles.module.css';
import EnhancedCardsRow from '../../basic/cardrow/EnhancedCardsRow';

// Example with typed cards array
const featureCards: CardProps[] = [
  {
    title: "Easy to Use",
    description: "Get started in minutes with our intuitive interface and comprehensive documentation.",
    href: "/",
    buttonText: "Get started",
    variant: "primary"
  },
  {
    title: "Highly Customizable",
    description: "Tailor the platform to your specific needs with extensive customization options.",
    href: "/",
    buttonText: "Customize",
    variant: "secondary"
  },
  {
    title: "Enterprise Ready",
    description: "Scale with confidence using our enterprise-grade infrastructure and support.",
    href: "/",
    buttonText: "Scale up",
    variant: "success"
  },
];

export default function EnhancedCardRowSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

				<EnhancedCardsRow
					title="Our Amazing Features"
					description="Discover what makes our product stand out from the crowd"
					columns={3}
					cards={featureCards}
				/>

			</div>
		</section>

  );
}
