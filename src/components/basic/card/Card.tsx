// src/components/Card.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import './Card.css';

export interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  buttonText?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success';
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  href, 
  icon, 
  buttonText = "Learn more",
  variant = "default" 
}) => {
  return (
    <div className={`card card--${variant}`}>
      {icon && (
        <div className="card__icon">
          {icon}
        </div>
      )}
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      {href && (
        <Link className="card__button" to={href}>
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Card;