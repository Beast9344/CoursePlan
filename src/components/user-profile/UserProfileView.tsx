import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit3, CalendarDays, Award, BookOpen } from "lucide-react";

interface UserProfileData {
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
  role: string;
  joinDate: string;
  coursesCompleted: number;
  achievements: string[];
}

interface UserProfileViewProps {
  user: UserProfileData;
}

export function UserProfileView({ user }: UserProfileViewProps) {
  return (
    <Card className="max-w-2xl mx-auto shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="text-center bg-card p-6 border-b">
        <div className="flex justify-center mb-4">
          <Avatar className="h-24 w-24 border-4 border-primary shadow-md">
            <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
            <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="font-headline text-3xl text-foreground">{user.name}</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">{user.email}</CardDescription>
        <Badge variant="secondary" className="mt-3 mx-auto text-sm py-1 px-3">{user.role}</Badge>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Bio</h3>
          <p className="text-foreground text-sm leading-relaxed">{user.bio}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
            <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                <CalendarDays className="h-5 w-5 text-primary" />
                <div>
                    <p className="text-xs text-muted-foreground">Joined</p>
                    <p className="text-sm font-medium text-foreground">{user.joinDate}</p>
                </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
                <div>
                    <p className="text-xs text-muted-foreground">Courses Completed</p>
                    <p className="text-sm font-medium text-foreground">{user.coursesCompleted}</p>
                </div>
            </div>
        </div>

        {user.achievements && user.achievements.length > 0 && (
          <div className="pt-4 border-t">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Achievements</h3>
            <div className="flex flex-wrap gap-2">
              {user.achievements.map((achievement, index) => (
                <Badge key={index} variant="outline" className="flex items-center py-1 px-2 border-primary/50 text-primary bg-primary/10">
                  <Award className="h-4 w-4 mr-1.5" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-card p-6 border-t">
        <Button variant="outline" className="w-full sm:w-auto">
          <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
