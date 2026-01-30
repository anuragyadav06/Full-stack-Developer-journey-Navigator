import React from 'react';
import { 
  LayoutDashboard, 
  Map, 
  FolderKanban, 
  Settings as SettingsIcon, 
  Download, 
  Upload, 
  Code2 
} from 'lucide-react';

import { ProgressRing } from './ProgressRing';
import { dailyTasks } from '@/data/roadmapData';
import { calculateOverallProgress, exportAllData, importData } from '@/lib/storage';

type View = 'dashboard' | 'roadmap' | 'projects' | 'streaks' | 'timeline' | 'settings';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {

  const overallProgress = calculateOverallProgress(dailyTasks);

  const handleExport = () => {
    const data = exportAllData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devpath-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          if (importData(content)) {
            window.location.reload();
          } else {
            alert('Failed to import data.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const navItems = [
    { id: 'dashboard' as View, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'roadmap' as View, label: 'Roadmap', icon: Map },
    { id: 'projects' as View, label: 'Projects', icon: FolderKanban },

    // ✅ NEW SETTINGS TAB
    { id: 'settings' as View, label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">

      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground">DevPath</h1>
            <p className="text-xs text-sidebar-foreground/60">Java Full Stack</p>
          </div>
        </div>
      </div>

      {/* Mini Progress */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <ProgressRing 
            progress={overallProgress} 
            size={48} 
            strokeWidth={4}
            showPercentage={false}
          />
          <div>
            <p className="text-2xl font-bold text-sidebar-foreground">
              {overallProgress}%
            </p>
            <p className="text-xs text-sidebar-foreground/60">
              Complete
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">

          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-sidebar-primary' : ''}`} />
                  {item.label}
                </button>
              </li>
            );
          })}

        </ul>
      </nav>

      {/* Data */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/50 uppercase tracking-wider mb-3">
          Data
        </p>

        <div className="space-y-2">

          <button
            onClick={handleExport}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-lg"
          >
            <Download className="w-4 h-4" />
            Export Backup
          </button>

          <button
            onClick={handleImport}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-lg"
          >
            <Upload className="w-4 h-4" />
            Import Backup
          </button>

        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/40 text-center">
          Jan 2026 → Jun 2027
        </p>
      </div>

    </aside>
  );
};
