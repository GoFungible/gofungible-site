import { JSX } from "react";
import GenericSection from "../../basic/GenericSection";

import styles from './index.module.css';
import SplitSection from "../../basic/SplitSection";
import CodeShowcase from "../../basic/CodeShowcase";
import { FaAddressBook, FaBolt, FaCheck, FaHandshake, FaRocket } from "react-icons/fa";
import CardsRow from '../../basic/cardrow/CardsRow';
import { MdOutlineSecurity } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiMiniPrinter } from "react-icons/hi2";
import { BaseCardProps } from "../../basic/cardrow/Card";

export default function StandardizationSection(): JSX.Element {

	const fungibleFeatures: BaseCardProps[] = [
		{
			variant: "primary",
			icon: <HiMiniPrinter size={120} />,
			title: "Supply Features",
			description: "Ability to create or remove supply.",
			buttonText: "More",
			href: "/docs/stack/immutability/supply",
		},
		{
			variant: "primary",
			icon: <FaMoneyBillTransfer size={120} />,
			title: "Transfer Features",
			description: "Operations triggered on token transfers.",
			buttonText: "More",
			href: "/docs/stack/immutability/transfer",
		},
		{
			variant: "primary",
			icon: <FaHandshake size={120} />,
			title: "Permit Features",
			description: "Allowance provided to third parties",
			buttonText: "More",
			href: "/docs/stack/immutability/permit",
		},
		{
			variant: "primary",
			icon: <MdOutlineSecurity size={120} />,
			title: "Security Features",
			description: "Such as token ownership.",
			buttonText: "More",
			href: "/docs/stack/immutability/security",
		},
	]

  return (

		<GenericSection
			title="Layer 2: Standardization Layer (2015-2025)"
			subtitle="In order to allow Fungible Tokens communicate with disparated system, it was soon required to define a common interface. This caused the advent of ERC-20 interface in 2015, adopted by Ethereum in 2017."
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
							language="sol"
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
							
							height="300px"
							expandable={true}
						/>
					</div>
				</SplitSection.Item>

				<SplitSection.Item>
					<div className={styles.textContent}>
						<h1>Complementary Standards</h1>
						<p>Following the ERC-20 Standard, a number of complementary standards specialized in specific technical features, as:</p>
						
						<ul className={styles.featureList}>
							<li className={styles.featureItem}>
								<FaCheck className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong> Lifecycle Management:</strong> as Pause, 
								</span>
							</li>
							<li className={styles.featureItem}>
								<FaBolt className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong> Supply Management:</strong> as Mint, Burn, 
								</span>
							</li>
							<li className={styles.featureItem}>
								<FaAddressBook className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong> Transfer Automation:</strong> as Transfer and Call
								</span>
							</li>
							<li className={styles.featureItem}>
								<FaAddressBook className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong> Security:</strong> as Owner transfer, Owner Renounce, 
								</span>
							</li>
							<li className={styles.featureItem}>
								<FaAddressBook className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong> Permit Features:</strong> as Permit
								</span>
							</li>
							<li className={styles.featureItem}>
								<FaAddressBook className={styles.featureIcon} />
								<span className={styles.featureText}>
									<strong> Upgradeability:</strong> as Diamond Standard
								</span>
							</li>
						</ul>

					</div>
				</SplitSection.Item>

			</SplitSection>


			<CardsRow
				description='Below are the categories of complementary ERC-20 Standards'
				columns={3}
				cards={fungibleFeatures}
			/>

		</GenericSection>

  );
}
