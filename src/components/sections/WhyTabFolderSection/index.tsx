// In your .mdx file
import TabFolder from '@site/src/components/basic/why/TabFolder';
import { JSX } from 'react';

import styles from './styles.module.css';

export default function Why2TabFolderSection(): JSX.Element {
  return (
    
		<section className={styles.services}>
      <div className="container">

<TabFolder
  tabs={[
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div>
          <h3>Product Overview</h3>
          <p>This is a comprehensive overview of our amazing product.</p>
          <ul>
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
          </ul>
        </div>
      )
    },
    {
      id: 'specifications',
      label: 'Specifications',
      content: (
        <div>
          <h3>Technical Specifications</h3>
          <table>
            <tr>
              <td>Weight</td>
              <td>1.2 kg</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>30 x 20 x 10 cm</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>Aluminum alloy</td>
            </tr>
          </table>
        </div>
      )
    },
    {
      id: 'pricing',
      label: 'Pricing',
      content: (
        <div>
          <h3>Pricing Plans</h3>
          <div style={{display: 'flex', gap: '1rem'}}>
            <div style={{border: '1px solid #ddd', padding: '1rem', borderRadius: '8px'}}>
              <h4>Basic</h4>
              <p>$9/month</p>
            </div>
            <div style={{border: '1px solid #ddd', padding: '1rem', borderRadius: '8px'}}>
              <h4>Pro</h4>
              <p>$29/month</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'support',
      label: 'Support',
      content: (
        <div>
          <h3>Customer Support</h3>
          <p>We offer 24/7 customer support through various channels:</p>
          <ul>
            <li>Email: support@example.com</li>
            <li>Phone: 1-800-123-4567</li>
            <li>Live Chat: Available on our website</li>
          </ul>
        </div>
      )
    }
  ]}
  variant="bordered"
/>

</div>
		</section>

  );
}