import { ProgressDashboardView } from '@/components/progress-dashboard/ProgressDashboardView';
import { placeholderModules } from '@/lib/placeholder-data';

export default function HomePage() {
  // In a real app, fetch user-specific progress data here
  const modules = placeholderModules;
  const overallProgress = modules.length > 0
    ? modules.reduce((acc, module) => acc + module.progress, 0) / modules.length
    : 0;

  return <ProgressDashboardView modules={modules} overallProgress={overallProgress} />;
}
