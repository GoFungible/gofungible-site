import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';

export default function EpicFailSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

				<div className={`cards-row__header cards-row__header--center`}>
					<h2 className="cards-row__title">Epic Fail Crypto</h2>
					<p className="cards-row__description">Fungible Standard defines delivers out of the box fungible tokens ready to capture different flavours of value.</p>
				</div>

				<SplitSection
					image={{
						src: 'https://media.istockphoto.com/id/1302209293/vector/businessman-with-plan-and-rocket-crashed-business-failure-the-rocket-fall-down.jpg?s=612x612&w=0&k=20&c=WaZyrl63QjhjnTim6PE3_Hhj4IPxYvYEprGjjp5GUDQ=',
						alt: 'Our amazing feature in action',
						width: 600,
						height: 400
					}}
					content={{
						title: 'Powerful Feature Name',
						titleLevel: 2,
						text: (
							<div>
								<p>Existing tokenization patterns hold specialized features and are suitable for different applications.</p>
								<p> * Misallocation of Capital</p>
								<p> * Unsuitable Resources.</p>
								<p> * Wrong expectations unmatched with technological evolution.</p>
							</div>
						)
					}}
				/>

			</div>
		</section>

  );
}