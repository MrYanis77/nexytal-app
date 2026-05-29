import { Link } from 'react-router-dom';
import ResponsiveImage from '../ResponsiveImage';
import { ressourcesSectionPath } from '../../data/ressources';

export default function RessourcesSectionCard({ section }) {
  const topicCount = section.submenu?.length ?? 0;

  return (
    <Link
      to={ressourcesSectionPath(section.id)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white no-underline shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-primary/10">
        {section.image && (
          <ResponsiveImage
            src={section.image}
            alt=""
            ariaHidden
            sizes="(max-width: 768px) 100vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <h2 className="absolute bottom-4 left-4 right-4 font-heading text-lg font-extrabold text-white md:text-xl">
          {section.titre}
        </h2>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex-1 font-body text-sm leading-relaxed text-content-muted">
          {section.description}
        </p>
        <span className="mt-4 text-xs font-bold uppercase tracking-wide text-accent">
          {topicCount} thématique{topicCount > 1 ? 's' : ''} →
        </span>
      </div>
    </Link>
  );
}
