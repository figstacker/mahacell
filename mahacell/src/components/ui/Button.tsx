import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button'
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${loading ? 'btn-loading' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <span className="spinner" />}
      <span className="btn-content">{children}</span>
      
      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          border: none;
          border-radius: var(--radius-md);
          font-family: var(--font-family);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
          overflow: hidden;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-primary {
          background: var(--brand-gradient);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .btn-primary:active:not(:disabled) {
          transform: scale(0.98);
        }

        .btn-secondary {
          background: var(--bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--border-light);
        }

        .btn-secondary:hover:not(:disabled) {
          background: var(--border-light);
        }

        .btn-ghost {
          background: transparent;
          color: var(--brand-primary);
        }

        .btn-ghost:hover:not(:disabled) {
          background: rgba(34, 197, 94, 0.1);
        }

        .btn-danger {
          background: var(--accent-rose);
          color: white;
        }

        .btn-danger:hover:not(:disabled) {
          background: #dc2626;
        }

        .btn-sm {
          padding: var(--space-2) var(--space-3);
          font-size: var(--text-sm);
        }

        .btn-md {
          padding: var(--space-3) var(--space-4);
          font-size: var(--text-base);
        }

        .btn-lg {
          padding: var(--space-4) var(--space-6);
          font-size: var(--text-lg);
        }

        .btn-full {
          width: 100%;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .btn-content {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
      `}</style>
    </button>
  );
};
