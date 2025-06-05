import { UserProfileView } from '@/components/user-profile/UserProfileView';

// Placeholder data for the user profile
const userProfileData = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatarUrl: 'https://placehold.co/128x128.png',
  bio: 'Lifelong learner and aspiring Moodle expert. Currently focused on mastering payroll compliance and exploring new learning technologies.',
  role: 'Learner',
  joinDate: 'Joined January 2023',
  coursesCompleted: 5,
  achievements: ['Payroll Fundamentals Certified', 'Compliance Whiz Badge'],
};

export default function UserProfilePage() {
  return <UserProfileView user={userProfileData} />;
}
