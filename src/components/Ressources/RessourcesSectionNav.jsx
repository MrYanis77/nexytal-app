import { Link } from 'react-router-dom';
import { ressourcesSectionPath, ressourcesTopicPath } from '../../data/ressources';

/** Navigation — sous-menu interne d'une section Ressources */
export default function RessourcesSectionNav({ section, activeTopicId }) {
  if (!section?.submenu?.length) return null;

  return (
    <nav
      aria-label={`Sous-menu ${section.titre}`}
      className="mb-10 overflow-x-auto rounded-2xl border border-gray-100 bg-white p-2 shadow-sm"
    >
      <ul className="flex min-w-max gap-1 md:flex-wrap md:min-w-0">
        <li>
          <Link
            to={ressourcesSectionPath(section.id)}
            className={`block rounded-xl px-4 py-2.5 text-sm font-bold no-underline transition-colors ${
              !activeTopicId
                ? 'bg-accent/10 text-accent'
                : 'text-primary hover:bg-surface-soft hover:text-accent'
            }`}
          >
            Tout voir
          </Link>
        </li>
        {section.submenu.map((item) => (
          <li key={item.id}>
            <Link
              to={ressourcesTopicPath(section.id, item.id)}
              className={`block rounded-xl px-4 py-2.5 text-sm font-semibold no-underline transition-colors ${
                activeTopicId === item.id
                  ? 'bg-accent/10 text-accent'
                  : 'text-content-muted hover:bg-surface-soft hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
