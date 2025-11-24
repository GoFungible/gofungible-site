import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';

export default function SplitLeftSectionSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

				<SplitSection
					image={{
						src: '/img/feature-image.jpg',
						alt: 'Our amazing feature in action',
						width: 600,
						height: 400
					}}
					content={{
						title: 'Powerful Feature Name',
						titleLevel: 2,
						text: 'This is a comprehensive description of our amazing feature. It explains how it works, why it matters, and what benefits users can expect. You can include multiple paragraphs and even markdown formatting.'
					}}
				/>

			</div>
		</section>

  );
}