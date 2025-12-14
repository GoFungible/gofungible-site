// src/components/DocHeader/DocHeader.tsx
import React from 'react';
import './DocHeader.css';

export interface DocHeaderProps {
  /** Main title for the header */
  title: string;
  /** Subtitle for the header */
  subtitle: string;
  /** Description text */
  description: string;
  /** Optional primary call-to-action button */
  primaryCta?: {
    text: string;
    href: string;
    icon?: string;
  };
  /** Optional secondary button */
  secondaryCta?: {
    text: string;
    href: string;
    icon?: string;
  };
  /** Image source URL */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Position of content relative to image */
  layout: 'left' | 'right';
  /** Background styling */
  background?: 'gradient' | 'solid' | 'transparent';
  /** Custom background color (if solid) */
  backgroundColor?: string;
  /** Custom text color */
  textColor?: string;
  /** Padding size */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /** Whether to show a decorative overlay on image */
  showImageOverlay?: boolean;
}

const DocHeader: React.FC<DocHeaderProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  layout = 'left',
  background = 'gradient',
  backgroundColor = '#2b3137',
  textColor = '#ffffff',
  padding = 'medium',
  showImageOverlay = true,
}) => {
  // Determine background class
  const getBackgroundClass = () => {
    if (background === 'gradient') return 'doc-header-gradient';
    if (background === 'transparent') return 'doc-header-transparent';
    return '';
  };

  // Determine padding class
  const getPaddingClass = () => {
    switch (padding) {
      case 'none': return 'doc-header-padding-none';
      case 'small': return 'doc-header-padding-small';
      case 'large': return 'doc-header-padding-large';
      default: return 'doc-header-padding-medium';
    }
  };

  // Content side component
  const ContentSide = () => (
    <div className="doc-header-content">
      <div className="doc-header-text">
        <h1 className="doc-header-title" style={{ color: textColor }}>
          {title}
        </h1>
        <h2 className="doc-header-subtitle" style={{ color: textColor }}>
          {subtitle}
        </h2>
        <p className="doc-header-description" style={{ color: `${textColor}cc` }}>
          {description}
        </p>
        
        {(primaryCta || secondaryCta) && (
          <div className="doc-header-ctas">
            {primaryCta && (
              <a 
                href={primaryCta.href}
                className="doc-header-cta doc-header-cta-primary"
                style={{ 
                  backgroundColor: '#25c2a0',
                  color: '#ffffff'
                }}
              >
                {primaryCta.icon && (
                  <span className="doc-header-cta-icon">{primaryCta.icon}</span>
                )}
                {primaryCta.text}
              </a>
            )}
            {secondaryCta && (
              <a 
                href={secondaryCta.href}
                className="doc-header-cta doc-header-cta-secondary"
                style={{ 
                  borderColor: textColor,
                  color: textColor
                }}
              >
                {secondaryCta.icon && (
                  <span className="doc-header-cta-icon">{secondaryCta.icon}</span>
                )}
                {secondaryCta.text}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // Image side component
  const ImageSide = () => (
    <div className="doc-header-image-wrapper">
      {showImageOverlay && <div className="doc-header-image-overlay"></div>}
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="doc-header-image"
        loading="lazy"
      />
    </div>
  );

  return (
    <header 
      className={`doc-header ${getBackgroundClass()} ${getPaddingClass()} ${layout === 'right' ? 'doc-header-reverse' : ''}`}
      style={background === 'solid' ? { backgroundColor, color: textColor } : { color: textColor }}
    >
      <div className="doc-header-container container">
        {layout === 'left' ? (
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
    </header>
  );
};

export default DocHeader;