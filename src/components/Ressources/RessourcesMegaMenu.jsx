import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../ResponsiveImage';
/** Méga-menu Ressources — sections à gauche, sous-liens à droite */
export default function RessourcesMegaMenu({ sections, onMouseEnter, onMouseLeave }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const current = sections[hoveredIndex] ?? sections[0];

  useEffect(() => {
    if (hoveredIndex >= sections.length) setHoveredIndex(0);
  }, [sections.length, hoveredIndex]);

  if (!sections?.length) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 z-[99] max-h-[min(520px,85vh)] overflow-hidden border-t-[3px] border-accent bg-white shadow-2xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto flex max-h-[min(520px,85vh)] max-w-container-3xl">
        {/* Sections */}
        <div className="w-72 shrink-0 overflow-y-auto border-r border-gray-100 bg-surface-soft">
          <p className="px-4 pb-2 pt-4 text-[10px] font-extrabold uppercase tracking-widest text-accent">
            Ressources Nexytal
          </p>
          <ul className="pb-4">
            {sections.map((section, index) => (
              <li key={section.label}>
                <Link
                  to={section.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`flex w-full flex-col items-start gap-0.5 border-l-[3px] px-4 py-3 text-left no-underline transition-colors ${
                    index === hoveredIndex
                      ? 'border-accent bg-white text-primary'
                      : 'border-transparent text-content-muted hover:bg-white/70 hover:text-primary'
                  }`}
                >
                  <span className="font-heading text-sm font-bold">{section.label}</span>
                  {section.description && (
                    <span className="line-clamp-2 text-[11px] leading-snug">{section.description}</span>
                  )}
                </Link>
              </li>
            ))}          </ul>
        </div>

        {/* Sous-menu de la section */}
        <div className="min-w-0 flex-1 overflow-y-auto p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-lg font-extrabold text-primary">{current.label}</h3>
              {current.description && (
                <p className="mt-1 max-w-xl text-sm text-content-muted">{current.description}</p>
              )}
            </div>
            <Link
              to={current.href}
              className="shrink-0 text-sm font-bold text-accent no-underline hover:underline"
            >
              Voir tout →
            </Link>
          </div>

          {current.image && (
            <div className="mb-5 h-28 w-full max-w-sm overflow-hidden rounded-xl">
              <ResponsiveImage
                src={current.image}
                alt=""
                ariaHidden
                sizes="320px"
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {current.submenu?.length ? (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {current.submenu.map((sub) => (
                <Link
                  key={sub.label}
                  to={sub.href}
                  className="rounded-xl border border-gray-100 p-4 no-underline transition-all hover:border-accent/40 hover:bg-orange-50/40"
                >
                  <p className="font-heading text-sm font-bold text-primary">{sub.label}</p>
                  {sub.description && (
                    <p className="mt-1 text-xs leading-snug text-content-muted">{sub.description}</p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              to={current.href}
              className="inline-flex text-sm font-bold text-accent no-underline hover:underline"
            >
              Accéder à {current.label} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
