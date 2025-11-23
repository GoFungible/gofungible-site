import React, { JSX } from 'react';
import styles from './styles.module.css';

export default function FeaturesSection(): JSX.Element {
  return (
    <section className={styles.tokenization}>

			<div className="container">

				<div className="text-center pb-1 mb-4">
					<div className="h1 fw-bold color-theme-reverse2">Quality Fungible Tokens</div>
					<p className="h3 color-theme-reverse1 mt-5 lh-base">Quantity Theory of Money has monopolized the minds of economists for centuries, but QTM is not of application in competing currencies. We aim to create a Quality Money Framework adapted to Web3. </p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png" width={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Security</h3>
							<p>With billions stolen every year, ensuring security is a must or any cryptocurrency. This includes audits, testing, backups or any possible mechanism to guarantee that your funds are safu.</p>
							<a className='d-block btn btn-lg mt-4' href='/docs/litepaper#253-security' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://cdn-icons-png.flaticon.com/512/8226/8226075.png" width={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Compliance</h3>
							<p>With juristictions increasingly stressing legilation around cryptocurrencies, any crypto must allow optional and configurable compliance mechanisms without reinvnting the wheel. </p>
							<a className='d-block btn btn-lg mt-4' href='/docs/litepaper#255-compliance' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://cdn-icons-png.flaticon.com/512/1317/1317755.png" width={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Reporting</h3>
							<p>Investor and users need fluid and trustfull information about the currency they are using. We must include configurable reports with enabled interoperability formats between servers.</p>
							<a className='d-block btn btn-lg mt-4' href='/docs/litepaper#254-transparency' role='button'>Learn More</a>
						</div>
					</div>
				</div>

			</div>
</section>


  );
}