import { ResourceLibraryView } from '@/components/resource-library/ResourceLibraryView';
import { placeholderResources } from '@/lib/placeholder-data';

export default function ResourceLibraryPage() {
  // In a real app, fetch resources data here, possibly with filtering/search capabilities
  const resources = placeholderResources;
  return <ResourceLibraryView resources={resources} />;
}
