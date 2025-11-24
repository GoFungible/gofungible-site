// src/components/EnhancedCardsRow.tsx
import React, { ReactNode } from 'react';
import EnhancedCard from '../card/EnhancedCard';
import './CardsRow.css';

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

export interface CardsRowProps {
  cards: BaseCardProps[];
  columns?: 2 | 3 | 4;
  title?: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const EnhancedCardsRow: React.FC<CardsRowProps> = ({ 
  cards, 
  columns = 3,
  title,
  description,
  className = '',
  align = 'center'
}) => {
  return (
    <section className={`cards-row ${className}`}>
      {(title || description) && (
        <div className={`cards-row__header cards-row__header--${align}`}>
          {title && <h2 className="cards-row__title">{title}</h2>}
          {description && <p className="cards-row__description">{description}</p>}
        </div>
      )}
      
      <div className={`cards-row__grid cards-row__grid--${columns}`}>
        {cards.map((card, index) => (
          <EnhancedCard
            key={index}
            title={card.title}
            description={card.description}
            href={card.href}
            icon={card.icon}
            buttonText={card.buttonText}
            variant={card.variant}
            onClick={card.onClick}
          />
        ))}
      </div>
    </section>
  );
};

export default EnhancedCardsRow;