import React from 'react';
import { useUIStore } from '../../store/uiStore';
import { BottomNav } from './BottomNav';
import { Header } from './Header';

interface AppShellProps {
  children: React.ReactNode;
  showNav?: boolean;
  headerTitle?: string;
  headerRight?: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ 
  children, 
  showNav = false,
  headerTitle,
  headerRight
}) => {
  const { theme, toggleTheme } = useUIStore();
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <div className="app-shell">
      {headerTitle && (
        <Header title={headerTitle} rightAction={headerRight} />
      )}
      
      <main className="main-content">
        {children}
      </main>
      
      {showNav && (
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      )}
      
      <style jsx>{`
        .app-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
        }

        .main-content {
          flex: 1;
          padding-bottom: calc(70px + env(safe-area-inset-bottom, 0));
          max-width: 480px;
          margin: 0 auto;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
