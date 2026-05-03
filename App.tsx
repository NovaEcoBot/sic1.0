
import React, { useState, useEffect } from 'react';
import { AIAppMode } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DefinitionView from './views/DefinitionView';
import IntelligenceView from './views/IntelligenceView';
import ResearchView from './views/ResearchView';
import DashboardView from './views/DashboardView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import TrendsView from './views/TrendsView';
import VaultView from './views/VaultView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('definition');
  const [appMode, setAppMode] = useState<AIAppMode>(AIAppMode.SCIENTIST);

  const renderContent = () => {
    switch (activeTab) {
      case 'definition': return <DefinitionView />;
      case 'intelligence': return <IntelligenceView mode={appMode} onModeChange={setAppMode} />;
      case 'research': return <ResearchView />;
      case 'vault': return <VaultView />;
      case 'trends': return <TrendsView />;
      case 'dashboard': return <DashboardView />;
      case 'about': return <AboutView />;
      case 'contact': return <ContactView />;
      default: return <DefinitionView />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
