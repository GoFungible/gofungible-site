import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function InteropSection(): JSX.Element {
  return (
    
			<GenericSection
				title="Layer 5: Interoperability Layer"
				subtitle="Immutable principles are nothing if they are not accessible. But blockchains were not designed to communicate which each other causing a liquidity fragmentation problem and therefore destroying usability.  Something must be done."
				variant="secondary"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

				<SplitSection
					image={{
						src: 'https://stealthex.io/blog/wp-content/uploads/2022/06/%D0%A1ross_chain_bridge-5-min.png',
						alt: 'Another great feature',
						width: 800,
						height: 400
					}}
					content={{
						title: 'Relayers',
						titleLevel: 2,
						text: (
							<div>
								<p>With several hundreds of blockchain <a href="https://chainlist.org/">networks</a>, more than 1700 <a href="https://blockspot.io/exchange/">exchanges</a>, 200 <a href="https://blockspot.io/wallet/">wallets</a> and more thn 1300 <a href="https://eips.ethereum.org/all">ERC standards</a> and the lack of role models and references the industry looks lost into the confusion which is the perfect climate for dishonest behaviour.</p>
								<p>Learn More on <a href="https://www.fungible.work/" target="_blank">Fungible Communication</a>.</p>
							</div>
						)
					}}
					buttonLabel="See ERC Standards"
					href="/docs/stack/interop/communication"
					reverse={false}
					spacing="large"
				/>

				<SplitSection
					image={{
						src: 'https://static.vecteezy.com/system/resources/previews/060/422/273/non_2x/bright-and-glossy-jigsaw-puzzle-pieces-in-primary-colors-arranged-in-a-cohesive-and-artistic-manner-on-white-free-png.png',
						alt: 'Another great feature',
						width: 600,
						height: 400
					}}
					content={{
						title: 'Interoperability Patterns',
						titleLevel: 2,
						text: (
							<div>
								<p>With several hundreds of blockchain <a href="https://chainlist.org/">networks</a>, more than 1700 <a href="https://blockspot.io/exchange/">exchanges</a>, 200 <a href="https://blockspot.io/wallet/">wallets</a> and more thn 1300 <a href="https://eips.ethereum.org/all">ERC standards</a> and the lack of role models and references the industry looks lost into the confusion which is the perfect climate for dishonest behaviour.</p>
								<p>Learn More on <a href="https://www.fungible.work/" target="_blank">Interoperability Patterns</a>.</p>
							</div>
						)
					}}
					buttonLabel="See ERC Standards"
					href="/docs/stack/interop/patterns"
					reverse={true}
					spacing="large"
				/>

			</GenericSection>

  );
}