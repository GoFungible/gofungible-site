import React from 'react';
import { FaCheck, FaRocket, FaAddressBook, FaBolt } from 'react-icons/fa';

import styles from './styles.module.css';
import CodeShowcase from '../../basic/CodeShowcase';
import SplitSection from '../../basic/SplitSection';

const StandardizationSection = () => {
  return (

    <SplitSection gap="large" align="center">

      <SplitSection.Item>
        <div className={styles.codeContainer}>
          <CodeShowcase
            title="BeautifulButton.tsx"
            language="tsx"
            description="Type-safe React component"
            code={

`interface BeautifulButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const BeautifulButton: React.FC<BeautifulButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false
}) => {
  const baseClasses = 'btn transition-all duration-200 transform hover:scale-105';
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
  };
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${ 
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BeautifulButton;`

						}
            height="400px"
            expandable={true}
          />
        </div>
      </SplitSection.Item>

      <SplitSection.Item>
        <div className={styles.textContent}>
          <div className={styles.badge}>🚀 New & Improved</div>
          <h1>Build Amazing Documentation with TypeScript</h1>
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

          <div className={styles.buttons}>
            <a href="/docs" className={styles.primaryButton}>
              <FaRocket />
              Get Started
            </a>
            <a href="/examples" className={styles.secondaryButton}>
              View Examples
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>99%</span>
              <span className={styles.statLabel}>Type Coverage</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2.3kb</span>
              <span className={styles.statLabel}>Bundle Size</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>⚡</span>
              <span className={styles.statLabel}>Fast</span>
            </div>
          </div>
        </div>
      </SplitSection.Item>

    </SplitSection>
  );
};

export { StandardizationSection };