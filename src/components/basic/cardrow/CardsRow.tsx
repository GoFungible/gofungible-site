// src/components/CardsRow.tsx
import React from 'react';
import Card, { CardProps } from '../card/Card';
import './CardsRow.css';

export interface CardsRowProps {
  cards: CardProps[];
  columns?: 2 | 3 | 4;
  title?: string;
  description?: string;
}

const CardsRow: React.FC<CardsRowProps> = ({ 
  cards, 
  columns = 3,
  title,
  description 
}) => {
  return (
    <section className="cards-row">
      {(title || description) && (
        <div className="cards-row__header">
          {title && <h2 className="cards-row__title">{title}</h2>}
          {description && <p className="cards-row__description">{description}</p>}
        </div>
      )}
      
      <div className={`cards-row__grid cards-row__grid--${columns}`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            href={card.href}
            icon={card.icon}
            buttonText={card.buttonText}
            variant={card.variant}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsRow;