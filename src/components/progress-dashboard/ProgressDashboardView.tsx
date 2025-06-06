
import type { CourseModule } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ModuleProgressCard } from './ModuleProgressCard';
import { Trophy, BarChart3, Award, ExternalLink } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import NextLink from 'next/link';

interface ProgressDashboardViewProps {
  modules: CourseModule[];
  overallProgress: number;
  userName?: string;
}

export function ProgressDashboardView({ modules, overallProgress, userName = "Learner" }: ProgressDashboardViewProps) {
  const completedModules = modules.filter(m => m.status === 'completed').length;
  const totalModules = modules.length;

  const scoredModules = modules.filter(m => typeof m.score === 'number');
  const averageScore = scoredModules.length > 0
    ? Math.round(scoredModules.reduce((acc, module) => acc + (module.score || 0), 0) / scoredModules.length)
    : null;

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Welcome back, {userName}!</CardTitle>
          <CardDescription>Here's an overview of your course progress.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium">Overall Course Progress</p>
              <p className="text-sm font-bold text-primary">{Math.round(overallProgress)}%</p>
            </div>
            <Progress value={overallProgress} aria-label={`Overall progress: ${Math.round(overallProgress)}%`} className="h-3 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center space-x-2 p-3 bg-secondary/30 rounded-md">
              <Trophy className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Modules Completed</p>
                <p className="text-sm font-semibold text-foreground">{completedModules} / {totalModules}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-secondary/30 rounded-md">
              <BarChart3 className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Average Score (Completed Modules)</p>
                <p className="text-sm font-semibold text-foreground">
                  {averageScore !== null ? `${averageScore}%` : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl flex items-center">
            <Award className="mr-2 h-6 w-6 text-primary" />
            Certification & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            To earn your Payroll Fundamentals Digital Badge and Certificate, you must achieve an 80% or higher pass mark in all module quizzes and the final comprehensive exam, all administered through the Moodle LMS.
          </p>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <NextLink href="#moodle-achievements-page" target="_blank" rel="noopener noreferrer">
              View Your Achievements on Moodle <ExternalLink className="ml-2 h-4 w-4" />
            </NextLink>
          </Button>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4 font-headline">Payroll Fundamentals Certification Course</h2>
        {modules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module) => (
              <ModuleProgressCard key={module.id} module={module} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">No modules available yet.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
