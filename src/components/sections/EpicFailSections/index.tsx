import { JSX } from "react";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";
import SplitChecklistSection, { ChecklistItem } from "../../basic/SplitChecklistSection/SplitChecklistSection";

export default function EpicFailSection(): JSX.Element {

  const minimalItems: ChecklistItem[] = [
    {
      id: 'step-1',
      text: 'Unsustainable Business Models',
      checked: false,
      textSize: 'xl'
    },
    {
      id: 'step-2',
      text: 'Unsustainable Tokenomics',
      checked: false,
      textSize: 'xl'
    },
    {
      id: 'step-3',
      text: 'Smart Contract Vulnerabilities.',
      checked: false,
      textSize: 'xl'
    },
    {
      id: 'step-5',
      text: 'Poor Governance Models',
      checked: false,
      textSize: 'xl'
    },
		{
      id: 'step-6',
      text: 'Bad faith of issuers',
      checked: false,
      textSize: 'xl'
    },
    {
      id: 'step-5',
      text: 'Misallocation of Capital',
      checked: false,
      textSize: 'xl'
    },
		{
      id: 'step-6',
      text: 'Unsuitable Resources',
      checked: false,
      textSize: 'xl'
    },
		{
      id: 'step-4',
      text: 'Separation from Foundational Principles.',
      checked: false,
      textSize: 'xl'
    },
  ];

  return (
    
		<GenericSection
			title="Epic Fail Crypto"
			subtitle="After 15 years in crypto, we cannot hide that the initial To The Moon 🚀 expectations have been broken and that nothing of the promised was delivered."
			variant="default"
			padding="large"
			headerSpacing="large"
			headerClassName={styles.heroHeaderContent}
		>

			{/* Example 4: Two columns with mixed text sizes */}
			<SplitChecklistSection
				title="So, what happened?"
				subtitle="At the detail level we can argue a plethora of mistakes:"
				takeAway="And, overall, a wrong understanding of technological process, which does not work in that way."
				checklistItems={minimalItems}
				imageSrc="https://media.istockphoto.com/id/1302209293/vector/businessman-with-plan-and-rocket-crashed-business-failure-the-rocket-fall-down.jpg?s=612x612&w=0&k=20&c=WaZyrl63QjhjnTim6PE3_Hhj4IPxYvYEprGjjp5GUDQ="
				imageAlt="Development environment"
				checklistFirst={false}
				columns={2}
				interactive={false}
				showIcons={false}
				iconSet="hi"
			/>

		</GenericSection>

  );
}