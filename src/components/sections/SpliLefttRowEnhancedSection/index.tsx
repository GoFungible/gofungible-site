import { JSX } from "react";

import styles from './styles.module.css';
import EnhancedSplitSection from "../../basic/enhancedsplitrow/EnhancedSplitSection";

export default function SplitLeftEnhancedSectionSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

			<EnhancedSplitSection
				image={{
					src: '/img/premium-feature.jpg',
					alt: 'Premium feature showcase',
					width: 580,
					height: 420,
					position: 'right'
				}}
				content={{
					title: 'Premium Experience',
					titleLevel: 2,
					text: 'Experience the best we have to offer with our premium features designed for power users and enterprises.'
				}}
				background="gradient"
				rounded={true}
				shadow={true}
			/>

			</div>
		</section>

  );
}