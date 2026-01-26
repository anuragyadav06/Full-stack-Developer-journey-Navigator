import React, { useState } from 'react';
import { StreakCalendarView } from '@/components/StreakCalendarView';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { RoadmapView } from '@/components/RoadmapView';
import { ProjectsView } from '@/components/ProjectsView';
import { JourneyTimelineView } from '@/components/JourneyTimelineView';


type View = 'dashboard' | 'roadmap' | 'projects' | 'streaks' | 'timeline' | 'settings';



const Index = () => {
  const [activeView, setActiveView] = useState<View>('dashboard');
  
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
        return <ProjectsView />;
      case 'streaks':
         return <StreakCalendarView />;
      case 'timeline':
          return <JourneyTimelineView />;
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
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 flex flex-col overflow-hidden">
        {renderView()}
      </main>
    </div>
  );
};

export default Index;
