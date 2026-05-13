import React from 'react';
import { Home, Receipt, Bell, User, QrCode } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Beranda' },
    { id: 'history', icon: Receipt, label: 'Riwayat' },
    { id: 'notifications', icon: Bell, label: 'Notifikasi', badge: 3 },
    { id: 'account', icon: User, label: 'Akun' }
  ];

  return (
    <nav className="bottom-nav safe-area-bottom">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <div className="icon-wrapper">
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              {tab.badge && (
                <span className="badge">{tab.badge}</span>
              )}
            </div>
            <span className="label">{tab.label}</span>
          </button>
        );
      })}
      
      <style jsx>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--bg-elevated);
          border-top: 1px solid var(--border-light);
          display: flex;
          justify-content: space-around;
          padding: var(--space-2) 0;
          z-index: 1000;
          box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: var(--space-2) var(--space-3);
          background: none;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          color: var(--text-muted);
        }

        .nav-item.active {
          color: var(--brand-primary);
        }

        .nav-item:hover {
          color: var(--brand-primary);
        }

        .icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--accent-rose);
          color: white;
          font-size: 10px;
          font-weight: 600;
          min-width: 16px;
          height: 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .label {
          font-size: var(--text-xs);
          font-weight: 500;
        }
      `}</style>
    </nav>
  );
};
