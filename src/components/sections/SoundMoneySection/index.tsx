import React, { JSX } from 'react';
import styles from './styles.module.css';

export default function SoundMoneySection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">

				<div className="text-center pb-1 mb-4">
					 <div className="h1 fw-bold color-theme-reverse2">Flavours of Captured Value</div> 
					<p className="h3 color-theme-reverse1 mt-5 lh-base">Fungible Standard defines delivers out of the box fungible tokens ready to capture different flavours of value.</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--6 my-auto d-flex">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/gofungible-site/img/tokenization_maturity_model_seal_table.svg" />
						</div>
					</div>

					<div className="col col--6 my-auto d-flex">
						<div className="padding-horiz--md">
							<h5>Existing tokenization patterns hold specialized features and are suitable for different applications.  </h5>
							<h5 className="my-4">By different reasons, all the existing tokens, fall short in delivering the funtions of a <b>Medium of Exchange</b> and this is preventing mainstream adoption and real world use cases.</h5>
							<h5>CryptoCommodity combines the features of existing tokens aiming to become the first (crypto)currency representing Sound Money ever. The specifications have been written decades or centuries ago and we are in the time to apply this knowledge.</h5>
							<h5 className="my-4">Join us on the mission to design how the Digital Sound Money should look like.</h5>
							<a className='d-block btn btn-lg mt-4' href='/docs/yellowpaper' role='button' target="_blank">Learn More</a>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
