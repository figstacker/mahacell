import React from 'react';
import styles from './ThemeToggle.module.css';
import { Sun, Moon } from 'lucide-react';
import { useUiStore } from '../../store/uiStore';

export interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useUiStore();

  return (
    <button
      className={`${styles.toggle} ${className}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
