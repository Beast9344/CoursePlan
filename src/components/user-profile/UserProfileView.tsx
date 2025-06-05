
'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit3, CalendarDays, Award, BookOpen, Save, XCircle, UploadCloud } from "lucide-react";
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

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

export function UserProfileView({ user: initialUser }: UserProfileViewProps) {
  const [user, setUser] = useState<UserProfileData>(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editableName, setEditableName] = useState(user.name);
  const [editableBio, setEditableBio] = useState(user.bio);
  const [editableAvatarFile, setEditableAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user.avatarUrl);
  const { toast } = useToast();

  const handleEditToggle = () => {
    if (isEditing) {
      // Reset fields if canceling
      setEditableName(user.name);
      setEditableBio(user.bio);
      setAvatarPreview(user.avatarUrl);
      setEditableAvatarFile(null);
    }
    setIsEditing(!isEditing);
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setEditableAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(prevUser => ({
      ...prevUser,
      name: editableName,
      bio: editableBio,
      avatarUrl: avatarPreview || prevUser.avatarUrl, // Use preview if available
    }));
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved.",
    });
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg rounded-xl overflow-hidden">
      <form onSubmit={handleSubmit}>
        <CardHeader className="text-center bg-card p-6 border-b">
          <div className="relative flex justify-center mb-4">
            <Avatar className="h-24 w-24 border-4 border-primary shadow-md">
              <AvatarImage src={avatarPreview || user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            {isEditing && (
              <div className="absolute bottom-0 right-1/2 translate-x-[calc(50%+2.5rem)]">
                <Button asChild size="icon" variant="outline" className="rounded-full h-8 w-8 bg-background border-primary text-primary hover:bg-primary/10">
                  <label htmlFor="avatarUpload" className="cursor-pointer">
                    <UploadCloud className="h-4 w-4" />
                    <input id="avatarUpload" type="file" accept="image/*" className="sr-only" onChange={handleAvatarChange} />
                  </label>
                </Button>
              </div>
            )}
          </div>
          {isEditing ? (
            <Input
              id="name"
              value={editableName}
              onChange={(e) => setEditableName(e.target.value)}
              className="text-center text-3xl font-headline border-0 shadow-none focus-visible:ring-0 h-auto p-0"
              required
            />
          ) : (
            <CardTitle className="font-headline text-3xl text-foreground">{user.name}</CardTitle>
          )}
          <CardDescription className="text-lg text-muted-foreground">{user.email}</CardDescription>
           <Badge variant="secondary" className="mt-3 mx-auto text-sm py-1 px-3">{user.role}</Badge>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <Label htmlFor="bio" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Bio</Label>
            {isEditing ? (
              <Textarea
                id="bio"
                value={editableBio}
                onChange={(e) => setEditableBio(e.target.value)}
                className="min-h-[100px]"
                rows={4}
                required
              />
            ) : (
              <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">{user.bio || "No bio provided."}</p>
            )}
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
        <CardFooter className="bg-card p-6 border-t flex justify-end space-x-2">
          {isEditing ? (
            <>
              <Button type="button" variant="outline" onClick={handleEditToggle}>
                <XCircle className="mr-2 h-4 w-4" /> Cancel
              </Button>
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </>
          ) : (
            <Button type="button" variant="outline" onClick={handleEditToggle}>
              <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
