// src/components/Hero/Hero.tsx
import React, { ReactNode } from 'react';
import './Hero.css';

export interface HeroProps {
  /** Main headline text */
  headline: string;
  /** Subheadline text */
  subheadline: string;
  /** Description paragraph */
  description: string;
  /** Optional primary button */
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  /** Optional secondary button */
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  /** Image source URL */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Position of content (left or right) */
  contentPosition: 'left' | 'right';
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  textColor?: string;
  /** Whether to show a gradient overlay */
  showOverlay?: boolean;
  /** Minimum height in viewport units */
  minHeight?: string;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  imageAlt,
  contentPosition = 'left',
  backgroundColor = '#1a1a2e',
  textColor = '#ffffff',
  showOverlay = true,
  minHeight = '100vh',
}) => {
  // Content side component
  const ContentSide = () => (
    <div className="hero-content">
      <div className="hero-text-content">
        <h1 className="hero-headline" style={{ color: textColor }}>
          {headline}
        </h1>
        <h2 className="hero-subheadline" style={{ color: textColor }}>
          {subheadline}
        </h2>
        <p className="hero-description" style={{ color: textColor }}>
          {description}
        </p>
        
        {(primaryButton || secondaryButton) && (
          <div className="hero-buttons">
            {primaryButton && (
              <button 
                className="hero-button hero-button-primary"
                onClick={primaryButton.onClick}
                style={{ 
                  backgroundColor: '#4f46e5',
                  color: '#ffffff'
                }}
              >
                {primaryButton.text}
              </button>
            )}
            {secondaryButton && (
              <button 
                className="hero-button hero-button-secondary"
                onClick={secondaryButton.onClick}
                style={{ 
                  backgroundColor: 'transparent',
                  color: textColor,
                  borderColor: textColor
                }}
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // Image side component
  const ImageSide = () => (
    <div className="hero-image-container">
      {showOverlay && <div className="hero-image-overlay"></div>}
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="hero-image"
      />
    </div>
  );

  return (
    <section 
      className="hero-section" 
      style={{ 
        backgroundColor, 
        minHeight,
        color: textColor
      }}
    >
      <div className={`hero-container ${contentPosition === 'right' ? 'hero-reverse' : ''}`}>
        {contentPosition === 'left' ? (
          <>
            <ContentSide />
            <ImageSide />
          </>
        ) : (
          <>
            <ImageSide />
            <ContentSide />
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;