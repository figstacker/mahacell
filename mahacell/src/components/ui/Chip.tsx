import React from 'react';
import styles from './Chip.module.css';

export interface ChipProps {
  label: string | React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onClick,
  className = '',
  disabled = false
}) => {
  return (
    <button
      className={`${styles.chip} ${selected ? styles.selected : ''} ${disabled ? styles.disabled : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Chip;
