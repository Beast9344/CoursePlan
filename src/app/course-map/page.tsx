import { CourseMapView } from '@/components/course-map/CourseMapView';
import { placeholderModules } from '@/lib/placeholder-data';

export default function CourseMapPage() {
  // In a real app, fetch course structure data here
  const modules = placeholderModules;
  return <CourseMapView modules={modules} />;
}
