import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';

export default function SplitSectionSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

			<SplitSection
  image={{
    src: '/img/another-feature.png',
    alt: 'Another great feature',
    width: 550,
    height: 400
  }}
  content={{
    title: 'Another Awesome Feature',
    titleLevel: 2,
    text: (
      <div>
        <p>This feature includes:</p>
        <ul>
          <li>Benefit one with detailed explanation</li>
          <li>Benefit two with more details</li>
          <li>Benefit three that makes this special</li>
        </ul>
        <p>And here's some concluding text about why this matters.</p>
      </div>
    )
  }}
  reverse={true}
  spacing="large"
/>

			</div>
		</section>

  );
}