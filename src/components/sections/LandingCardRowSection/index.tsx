import React from 'react';
import Layout from '@theme/Layout';
import LandingCardRow, { CardItem } from '../../basic/CardRow6/CardRow6';

import styles from './styles.module.css';

const LandingCardRowSection: React.FC = () => {

  const integrationCards: CardItem[] = [
    {
      icon: '🔗',
      title: 'API Integration',
      description: 'Seamless integration with your existing APIs and services.',
      href: '/docs/integrations/api'
    },
    {
      icon: '🛠️',
      title: 'Developer Tools',
      description: 'Comprehensive toolkit for developers to extend functionality.',
      href: '/docs/development/tools'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Built-in analytics to track usage and user behavior.',
      href: '/docs/features/analytics'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Enterprise-grade security features and best practices.',
      href: '/docs/security'
    },
    {
      icon: '🌐',
      title: 'Internationalization',
      description: 'Multi-language support for global audiences.',
      href: '/docs/i18n'
    },
    {
      icon: '🚦',
      title: 'CI/CD Ready',
      description: 'Pre-configured for continuous integration and deployment.',
      href: '/docs/deployment'
    },
  ];

  return (


		<section className={styles.services}>
      <div className="container">



        {/* Integrations Card Row */}
        <LandingCardRow 
          cards={integrationCards}
          title="Seamless Integrations"
          subtitle="Connect with your favorite tools and services"
          className={styles.alternateSection}
        />

				

			</div>
		</section>



  );
};

export default LandingCardRowSection;