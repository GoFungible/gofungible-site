import React, { JSX } from 'react';
import styles from './styles.module.css';

export default function ValueChainSection(): JSX.Element {
  return (
    <section className={styles.services}>

      <div className="container">

				<div className={`cards-row__header cards-row__header--center`}>
					<h2 className="cards-row__title">Value Chain Coverage</h2>
					<p className="cards-row__description">GoFungible aims to cover the full lifecycle of fungible tokens to benefit stakeholders</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none">
							<img className="featureSvg__8YW mb-3" alt="Tokenization" src="img/blockchain.svg" height={100}/>
							<h4 className={styles.clippedelement}>Tokenization</h4>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Learn the principles and practices to capture the value of your commodity into your cryptocommodity.</p>
								<a className='btn btn-lg mt-auto' href='/docs/tokenization/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none">
							<img className="featureSvg__8YW mb-3" alt="Funding" src="img/funding.svg" height={100}/>
							<h4 className={styles.clippedelement}>Funding</h4>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Get funds from investors to execute your project and return a profit to the investors and value for society.</p>
								<a className='btn btn-lg mt-auto' href='docs/funding/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none">
							<img className="featureSvg__8YW mb-3" alt="Trading" src="img/trading.svg" height={100}/>
							<h4 className={styles.clippedelement}>Negotiation</h4>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Use the price formation mechanism of your underlying market to value your cryptocurrency.</p>
								<a className='btn btn-lg mt-auto' href='docs/negotiation/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none">
							<img className="featureSvg__8YW mb-3" alt="Operations" src="img/operations.svg" height={100}/>
							<h4 className={styles.clippedelement}>Distribution</h4>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Choose the best techniques to distribute your cryptocommodity as the barebone for your marketplapce.</p>
								<a className='btn btn-lg mt-auto' href='docs/distribution/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none">
							<img className="featureSvg__8YW mb-3" alt="DeFi" src="img/defi.svg" height={100}/>
							<h4 className={styles.clippedelement}>DeFi Services</h4>
							<div className="card-body d-flex flex-column">
								<p className="pt-3">Contribute to financial inclusion by delivering the value of your commodity back to the society.</p>
								<a className='btn btn-lg mt-auto' href='docs/defi/intro' role='button'>Learn More</a>
							</div>
						</div>
					</div>

					<div className="col text--center padding-horiz--none">
						<div className="card border-0 shadow-none h-100 padding-horiz--none">
							<img className="featureSvg__8YW mb-3" alt="Crowdsolving" src="img/crowdsolving.svg" height={100}/>
							<h4 className={styles.clippedelement}>Crowdsolving</h4>
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
