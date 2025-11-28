import React, { JSX } from 'react';
import styles from './styles.module.css';

export default function ValueChainSection(): JSX.Element {
  return (
    <section className={styles.section}>

      <div className="container">

				<div className={`cards-row__header cards-row__header--center`}>
					<h2 className="cards-row__title">Layer 7: Application Layer</h2>
					<p className="cards-row__description">Only when fungible tokens are specialized and reliable they can enter in the Application Layer. Fungible Standard aims to build fungible tokens that can cover the full lifecycle and benefit stakeholders. </p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col text--center padding-horiz--none">
						<div className="card border--none shadow-none h-100 padding-horiz--none bg-transparent">
							<img className="featureSvg__8YW mb-3" alt="Tokenization" src="img/blockchain.svg" height={100}/>
							<h2 className={styles.clippedelement}>Tokenization</h2>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Learn the principles and practices to capture the value of your commodity into your cryptocommodity.</p>
								<a className='btn btn-lg mt-auto' href='/docs/tokenization/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none bg-transparent">
							<img className="featureSvg__8YW mb-3" alt="Funding" src="img/funding.svg" height={100}/>
							<h2 className={styles.clippedelement}>Funding</h2>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Get funds from investors to execute your project and return a profit to the investors and value for society.</p>
								<a className='btn btn-lg mt-auto' href='docs/funding/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none bg-transparent">
							<img className="featureSvg__8YW mb-3" alt="Trading" src="img/trading.svg" height={100}/>
							<h2 className={styles.clippedelement}>Negotiation</h2>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Use the price formation mechanism of your underlying market to value your cryptocurrency.</p>
								<a className='btn btn-lg mt-auto' href='docs/negotiation/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none bg-transparent">
							<img className="featureSvg__8YW mb-3" alt="Operations" src="img/operations.svg" height={100}/>
							<h2 className={styles.clippedelement}>Distribution</h2>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Choose the best techniques to distribute your cryptocommodity as the barebone for your marketplapce.</p>
								<a className='btn btn-lg mt-auto' href='docs/distribution/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none bg-transparent">
							<img className="featureSvg__8YW mb-3" alt="DeFi" src="img/defi.svg" height={100}/>
							<h2 className={styles.clippedelement}>DeFi Services</h2>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Contribute to financial inclusion by delivering the value of your commodity back to the society.</p>
								<a className='btn btn-lg mt-auto' href='docs/defi/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none bg-transparent">
							<img className="featureSvg__8YW mb-3" alt="Crowdsolving" src="img/crowdsolving.svg" height={100}/>
							<h2 className={styles.clippedelement}>Crowdsolving</h2>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Apply the framework to other commodities to enable citizens funding and solving their own problems.</p>
								<a className='btn btn-lg mt-auto' href='docs/valueChain/crowdsolving/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
