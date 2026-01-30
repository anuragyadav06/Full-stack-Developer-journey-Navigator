import React, { useState } from 'react';

import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { RoadmapView } from '@/components/RoadmapView';
import { ProjectsView } from '@/components/ProjectsView';
import { PhaseProjectsView } from '@/components/PhaseProjectsView';
import { StreakCalendarView } from '@/components/StreakCalendarView';
import { JourneyTimelineView } from '@/components/JourneyTimelineView';

import Settings from '@/pages/Settings';

type View =
  | 'dashboard'
  | 'roadmap'
  | 'projects'
  | 'streaks'
  | 'timeline'
  | 'settings';

const Index = () => {

  const [activeView, setActiveView] = useState<View>('dashboard');

  // ✅ NEW STATE FOR PROJECT PHASE NAVIGATION
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const handleNavigateToRoadmap = () => {
    setActiveView('roadmap');
  };

  const renderView = () => {

    switch (activeView) {

      case 'dashboard':
        return (
          <Dashboard
            onNavigateToRoadmap={handleNavigateToRoadmap}
            onNavigateToStreaks={() => setActiveView('streaks')}
            onNavigateToTimeline={() => setActiveView('timeline')}
          />
        );

      case 'roadmap':
        return <RoadmapView />;

      case 'projects':
        return selectedPhase ? (
          <PhaseProjectsView
            phaseId={selectedPhase}
            onBack={() => setSelectedPhase(null)}
          />
        ) : (
          <ProjectsView
            onSelectPhase={(phaseId) => setSelectedPhase(phaseId)}
          />
        );

      case 'streaks':
        return <StreakCalendarView />;

      case 'timeline':
        return <JourneyTimelineView />;

      case 'settings':
        return <Settings />;

      default:
        return (
          <Dashboard
            onNavigateToRoadmap={handleNavigateToRoadmap}
            onNavigateToStreaks={() => setActiveView('streaks')}
            onNavigateToTimeline={() => setActiveView('timeline')}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background">

      <Sidebar
        activeView={activeView}
        onViewChange={(view) => {
          setActiveView(view);

          // reset phase when leaving projects
          if (view !== 'projects') {
            setSelectedPhase(null);
          }
        }}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        {renderView()}
      </main>

    </div>
  );
};

export default Index;
