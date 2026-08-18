import React from 'react';
import './QuickExpenseButton.css';

export interface QuickExpenseButtonProps {
  icon: string;
  label: string;
  defaultAmountPaise?: number;
  categoryName?: string;
  onClick: () => void;
  className?: string;
}

export const QuickExpenseButton: React.FC<QuickExpenseButtonProps> = ({
  icon,
  label,
  defaultAmountPaise,
  categoryName,
  onClick,
  className = '',
}) => {
  const formattedAmount =
    defaultAmountPaise !== undefined
      ? `₹${(defaultAmountPaise / 100).toLocaleString('en-IN')}`
      : undefined;

  return (
    <button
      className={`quick-expense-btn ${className}`}
      onClick={onClick}
      type="button"
      aria-label={`Quick record ${label}${formattedAmount ? ` ${formattedAmount}` : ''}`}
    >
      <span className="quick-expense-btn__icon">{icon}</span>
      <div className="quick-expense-btn__details">
        <span className="quick-expense-btn__label">{label}</span>
        {categoryName && <span className="quick-expense-btn__category">{categoryName}</span>}
      </div>
      {formattedAmount && (
        <span className="quick-expense-btn__amount">{formattedAmount}</span>
      )}
    </button>
  );
};
