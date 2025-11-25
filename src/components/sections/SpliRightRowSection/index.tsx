import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';

export default function SplitSectionSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

				<SplitSection
					image={{
						src: '/img/decentralization.webp',
						alt: 'Another great feature',
						width: 550,
						height: 400
					}}
					content={{
						title: 'Out of the Box Decentralization',
						titleLevel: 2,
						text: (
							<div>
								<p>We think that decentralization in the currency and ecosystem, should be, ideally, provided from launch.</p>
								<p>We also think that decentralization patterns can be standard across the industry, instead of company specific. However, we do not have yet the dimensions for this multifaceted task and this is core mission for this community.</p>
								<p>Catallactic aims to identify the requirements for full decentralization and integrate them, out of the box, into the Catallactic Framework.</p>
							</div>
						)
					}}
					reverse={true}
					spacing="large"
				/>

			</div>
		</section>

  );
}