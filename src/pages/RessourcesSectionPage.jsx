import { useParams, Navigate } from 'react-router-dom';

import RessourcesSummaryPage from './RessourcesSummaryPage';
import RessourcesSectionIndexPage from './RessourcesSectionIndexPage';
import RessourcesTopicPage from './RessourcesTopicPage';
import { ressourcesSections, getRessourcesTopic } from '../data/ressources';

const VALID_SECTIONS = new Set(ressourcesSections.map((s) => s.id));

export default function RessourcesSectionPage() {
  const { sectionId, topicId } = useParams();

  if (!sectionId) {
    return <RessourcesSummaryPage />;
  }

  if (!VALID_SECTIONS.has(sectionId)) {
    return <Navigate to="/ressources" replace />;
  }

  if (topicId) {
    if (!getRessourcesTopic(sectionId, topicId)) {
      return <Navigate to={`/ressources/${sectionId}`} replace />;
    }
    return <RessourcesTopicPage sectionId={sectionId} topicId={topicId} />;
  }

  return <RessourcesSectionIndexPage sectionId={sectionId} />;
}
