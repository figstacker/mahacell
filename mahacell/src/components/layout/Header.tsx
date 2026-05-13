import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBack = false, 
  rightAction 
}) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        {showBack ? (
          <button className="back-button" onClick={() => navigate(-1)}>
            <ChevronLeft size={24} />
          </button>
        ) : (
          <div className="spacer" />
        )}
        
        {title && <h1 className="title">{title}</h1>}
        
        <div className="right-action">
          {rightAction}
        </div>
      </div>
      
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-light);
          padding: var(--space-4) var(--space-4) var(--space-3);
          z-index: 100;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 480px;
          margin: 0 auto;
        }

        .back-button {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: var(--space-1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity var(--transition-fast);
        }

        .back-button:hover {
          opacity: 0.7;
        }

        .spacer {
          width: 40px;
        }

        .title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          flex: 1;
        }

        .right-action {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
      `}</style>
    </header>
  );
};
