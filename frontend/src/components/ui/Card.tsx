import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'flat' | 'elevated' | 'bordered';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  variant = 'bordered',
  onClick,
}) => {
  const cardClasses = [
    'card',
    `card--padding-${padding}`,
    `card--${variant}`,
    onClick ? 'card--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} onClick={onClick} role={onClick ? 'button' : undefined}>
      {children}
    </div>
  );
};
