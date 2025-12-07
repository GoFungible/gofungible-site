import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function EpicFailSection(): JSX.Element {
  return (
    
		<GenericSection
			title="Epic Fail Crypto"
			subtitle="After 15 years in crypto, we cannot hide that the initial To The Moon 🚀 expectations have been broken and that nothing of the promised was delivered."
			variant="default"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

			<SplitSection
				image={{
					src: 'https://media.istockphoto.com/id/1302209293/vector/businessman-with-plan-and-rocket-crashed-business-failure-the-rocket-fall-down.jpg?s=612x612&w=0&k=20&c=WaZyrl63QjhjnTim6PE3_Hhj4IPxYvYEprGjjp5GUDQ=',
					alt: 'Our amazing feature in action',
					width: 600,
					height: 400
				}}
				content={{
					title: 'So, what happened?',
					titleLevel: 2,
					text: (
						<div>
							<p>At the detail level we can argue a plethora of mistakes:.</p>
							<p> * Unsustainable Business Models</p>
							<p> * Unsustainable Tokenomics</p>
							<p> * Smart Contract Vulnerabilities.</p>
							<p> * Separation from Foundational Principles.</p>
							<p> * Poor Governance Models</p>
							<p> * Bad faith of issuers</p>
							<hr/>
							<p>If we zoom out we can observe a common wrong expectations.caused by:</p>
							<p> * Misallocation of Capital</p>
							<p> * Unsuitable Resources.</p>
							<hr/>
							<p>And, overall, a wrong understanding of technological process, <b><u>which does not work in that way</u></b>.</p>
						</div>
					)
				}}
			/>

		</GenericSection>

  );
}