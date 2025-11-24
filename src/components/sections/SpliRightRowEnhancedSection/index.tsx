import { JSX } from "react";

import styles from './styles.module.css';
import EnhancedSplitSection from "../../basic/enhancedsplitrow/EnhancedSplitSection";

export default function SplitRightEnhancedSectionSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

			<EnhancedSplitSection
				image={{
					src: '/img/lightweight.png',
					alt: 'Lightweight design',
					width: 500,
					height: 400
				}}
				content={{
					title: 'Lightweight & Fast',
					titleLevel: 3,
					text: 'Our solution is built for performance without compromising on features or user experience.'
				}}
				background="light"
				spacing="large"
			/>

			</div>
		</section>

  );
}