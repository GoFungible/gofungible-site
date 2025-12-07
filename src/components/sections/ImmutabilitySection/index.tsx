import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function ImmutabilitySection(): JSX.Element {
  return (
    
			<GenericSection
				title="Layer 4: Immutability Layer"
				subtitle="Once principles have been defined, we have a guideline to choose the right set of features to be included in the token's contract. As with any contract, these principles must be set in stone."
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
					title: 'Compose',
					titleLevel: 2,
					text: (
						<div>
							<p>Compose, based on ERC-2535 offers a foundation to create contract by composing existing pieces already existing on chain..</p>
						</div>
					)
				}}
				reverse={true}
				spacing="large"
			/>

			</GenericSection>

  );
}