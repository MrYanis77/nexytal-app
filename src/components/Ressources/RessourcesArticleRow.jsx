import { Link } from 'react-router-dom';
import ResponsiveImage from '../ResponsiveImage';

export default function RessourcesArticleRow({ title, date, href, image }) {
  const isExternal = /^https?:\/\//i.test(href);

  const inner = (
    <>
      <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-primary/10 md:h-[4.5rem] md:w-28">
        {image ? (
          <ResponsiveImage
            src={image}
            alt=""
            ariaHidden
            sizes="112px"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-heading text-sm font-bold leading-snug text-primary transition-colors group-hover:text-accent md:text-base">
          {title}
        </h4>
        {date ? (
          <time className="mt-1 block font-body text-xs text-content-muted">{date}</time>
        ) : null}
      </div>
    </>
  );

  const className =
    'group flex items-center gap-4 border-b border-gray-100 py-4 no-underline last:border-b-0 md:py-5';

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {inner}
    </Link>
  );
}
