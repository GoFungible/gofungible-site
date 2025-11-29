import { JSX } from "react";
import GenericSection from "../GenericSection";

import styles from './index.module.css';
import SplitSection from "../../basic/SplitSection";
import CodeShowcase from "../../basic/CodeShowcase";
import { FaAddressBook, FaBolt, FaCheck, FaRocket } from "react-icons/fa";

export default function StandardizationSection(): JSX.Element {
  return (

		<GenericSection
			title="Layer 2: Standardization Layer"
			subtitle="Defining the criteria and selecting the pieces that comply with the value capture principles will provide better adoption in an already saturated ecosystem."
			variant="secondary"
			padding="medium"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

			<SplitSection gap="large" align="center">

				<SplitSection.Item>
					<div className={styles.codeContainer}>
						<CodeShowcase
							title="IERC-20.sol"
							language="tsx"
							description="Interface for ERC-20 Fungible Tokens"

							code={
`interface IERC20 {
  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
  function totalSupply() external view returns (uint256);
  function balanceOf(address account) external view returns (uint256);
  function transfer(address to, uint256 value) external returns (bool);
  function allowance(address owner, address spender) external view returns (uint256);
  function approve(address spender, uint256 value) external returns (bool);
  function transferFrom(address from, address to, uint256 value) external returns (bool);
}`
							}
							
							height="400px"
							expandable={true}
						/>
					</div>
				</SplitSection.Item>

				<SplitSection.Item>
					<div className={styles.textContent}>
						<h1>ERC-20 Standard</h1>
						<p>
							Create beautiful, type-safe documentation sites with our powerful 
							React components and TypeScript support. Fast, modern, and developer-friendly.
						</p>
						
						<ul className={styles.featureList}>
							<li className={styles.featureItem}>
								<FaCheck className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong>Type-Safe:</strong> Full TypeScript support with excellent autocomplete
								</span>
							</li>
							<li className={styles.featureItem}>
								<FaBolt className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong>Fast & Lightweight:</strong> Optimized performance with minimal bundle size
								</span>
							</li>
							<li className={styles.featureItem}>
								<FaAddressBook className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong>Reliable:</strong> Built with best practices and comprehensive testing
								</span>
							</li>
						</ul>

					</div>
				</SplitSection.Item>

			</SplitSection>

		</GenericSection>

  );
}
