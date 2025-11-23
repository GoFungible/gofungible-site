import React, { JSX } from 'react';
import styles from './styles.module.css';

export default function EcosystemSection(): JSX.Element {
  return (
    <section className={styles.tokenization}>

			<div className="container">

				<div className="text-center pb-1 mb-4">
					<div className="h1 fw-bold color-theme-reverse2">Ecosystem</div>
					<p className="h3 color-theme-reverse1 mt-5 lh-base">Defining the criteria and selecting the pieces that comply with the value capture principles will provide better adoption in an already saturated ecosystem. </p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLav7s_5yeEZcwNyxf5DeD-F-gYt9FxFm8uvtvem8NNXLofDE6jFFx6r0_YgeNrqqf6U&usqp=CAU" height={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>DLT Networks</h3>
							<p>With hundreds of DLT networks with different consensus protocols, gas fees or ecosystems is necessary to understand which ones comply with value-based cryptocommodities.</p>
							<a className='d-block btn btn-lg mt-4' href='/docs/litepaper' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
						<img className="featureSvg__8YW" alt="ETL Simplified" src="/gofungible-site/img/parking.png" height={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Wallets</h3>
							<p>Despite there are more than 1 hundred of wallets in offer in the crypto market, there is not a simple $20 HW wallet, as a Garage Door Opener, to pay in real markets and this is preventing massification.  </p>
							<a className='d-block btn btn-lg mt-4' href='/docs/ecosystem/wallets/list' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/gofungible-site/img/barter.png" height={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Exchanges</h3>
							<p>When issuing your value-based cryptocommodities it is necessary to understand what CEX, HEX, DEX, FEX, Liquidity Aggregators comply with the Trading, Operations and Distribution.</p>
							<a className='d-block btn btn-lg mt-4' href='/docs/ecosystem/exchanges/list' role='button'>Learn More</a>
						</div>
					</div>
				</div>

			</div>
</section>


  );
}