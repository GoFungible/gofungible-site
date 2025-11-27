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
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKwH7tZTDd-IgbSPdRXWslEPnacjUcQTbuQ&s',
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