// src/components/splitSection/SplitSection.tsx
import React from 'react';
import './SplitSection.css';
import Link from '@docusaurus/Link';

export interface SplitSectionProps {
  image: {
    src: string;
    alt: string;
    position?: 'left' | 'right';
    width?: number;
    height?: number;
  };
  content: {
    title: string;
    text: string | React.ReactNode;
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  reverse?: boolean;
  verticalAlign?: 'top' | 'center' | 'bottom';
  spacing?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
  buttonLabel?: string,
	href?: string,
  onClick?: () => void;
  imageFirst?: boolean;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  image,
  content,
  reverse = false,
  verticalAlign = 'center',
  spacing = 'medium',
  className = '',
	buttonLabel,
	href,
	onClick,
  imageFirst = false
}) => {
  const TitleTag = `h${content.titleLevel || 2}` as keyof React.JSX.IntrinsicElements;

  return (
    <section className={`
      split-section 
      split-section--${reverse ? 'reverse' : 'normal'}
      split-section--${verticalAlign}
      split-section--spacing-${spacing}
      ${className}
    `}>
      <div className="split-section__container">

        {/* Image Column */}
        <div className="split-section__image">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        </div>

        {/* Content Column */}
        <div className="split-section__content">
          <TitleTag className="split-section__title">
            {content.title}
          </TitleTag>
          <div className="split-section__text">
            {typeof content.text === 'string' ? (
              <p>{content.text}</p>
            ) : (
              content.text
            )}
          </div>

					{ href && buttonLabel ?
      			<Link to={href} className="split-section__link">
          		<div className="split-section__button">
								{buttonLabel}
							</div>
						</Link>
					: ''}

					{ onClick && buttonLabel ?
      			<Link to={href} className="split-section__link">
          		<button className="split-section__button" onClick={onClick} type="button">
			        	{buttonLabel}
      				</button>
						</Link>
					: ''}
        </div>

      </div>
    </section>
  );
};

export default SplitSection;