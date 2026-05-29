import { Link } from 'react-router-dom';
import { ressourcesTopicPath } from '../../data/ressources';

export default function RessourcesTopicCard({ sectionId, item, topic }) {
  const articleCount = topic?.articles?.length ?? 0;

  return (
    <Link
      to={ressourcesTopicPath(sectionId, item.id)}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 no-underline shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      <h3 className="font-heading text-lg font-bold text-primary transition-colors group-hover:text-accent">
        {item.label}
      </h3>
      {item.description && (
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-content-muted">
          {item.description}
        </p>
      )}
      <span className="mt-4 text-xs font-bold uppercase tracking-wide text-accent">
        {articleCount > 0 ? `${articleCount} article${articleCount > 1 ? 's' : ''}` : 'Consulter'} →
      </span>
    </Link>
  );
}
