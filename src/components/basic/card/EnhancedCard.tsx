// src/components/EnhancedCard.tsx
import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import './Card.css';

export type CardVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface BaseCardProps {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  buttonText?: string;
  variant?: CardVariant;
  onClick?: () => void;
}

const EnhancedCard: React.FC<BaseCardProps> = ({ 
  title, 
  description, 
  href, 
  icon, 
  buttonText = "Learn more",
  variant = "default",
  onClick
}) => {
  const cardContent = (
    <>
      {icon && (
        <div className="card__icon">
          {icon}
        </div>
      )}
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      {(href || onClick) && (
        <div className="card__button">
          {buttonText}
        </div>
      )}
    </>
  );

  const cardClass = `card card--${variant} ${onClick ? 'card--clickable' : ''}`;

  if (href) {
    return (
      <Link to={href} className={cardClass}>
        {cardContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={cardClass} onClick={onClick} type="button">
        {cardContent}
      </button>
    );
  }

  return (
    <div className={cardClass}>
      {cardContent}
    </div>
  );
};

export default EnhancedCard;