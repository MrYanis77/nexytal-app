import { Link } from 'react-router-dom';
import ResponsiveImage from '../ResponsiveImage';

/** Thèmes couleur — dégradé 135deg sur toute la carte. */
const THEMES = {
  coaching: {
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 45%, #C026D3 100%)',
    blend: '#9333EA',
  },
  medical: {
    gradient: 'linear-gradient(135deg, #2563EB 0%, #0284C7 50%, #06B6D4 100%)',
    blend: '#0284C7',
  },
  recrutement: {
    gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #F59E0B 100%)',
    blend: '#F97316',
  },
  trainers: {
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #312E81 55%, #4338CA 100%)',
    blend: '#312E81',
  },
  rh: {
    gradient: 'linear-gradient(135deg, #2563EB 0%, #475569 55%, #64748B 100%)',
    blend: '#475569',
  },
};

function isExternalHref(href) {
  return /^https?:\/\//i.test(href);
}

function Diamond({ className, style }) {
  return (
    <div
      className={`pointer-events-none absolute border border-white/20 bg-white/[0.08] ${className}`}
      style={{ transform: 'rotate(45deg)', ...style }}
      aria-hidden
    />
  );
}

function PolygonAccent({ className, style }) {
  return (
    <div
      className={`pointer-events-none absolute bg-white/[0.06] ${className}`}
      style={{
        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        ...style,
      }}
      aria-hidden
    />
  );
}

export default function HomeExpertiseCard({ title, image, theme = 'coaching', href = '#' }) {
  const palette = THEMES[theme] ?? THEMES.coaching;

  const className =
    'group relative block aspect-[4/3] overflow-hidden rounded-2xl no-underline shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,23,42,0.2)]';

  const content = (
    <>
      <div className="absolute inset-0" style={{ background: palette.gradient }} aria-hidden />

      <Diamond className="left-6 top-5 h-12 w-12 opacity-70" />
      <Diamond className="left-[28%] top-[42%] h-8 w-8 opacity-50" />
      <Diamond className="bottom-8 left-4 h-14 w-14 opacity-60" />
      <PolygonAccent className="right-[18%] top-6 h-16 w-20 opacity-40" />
      <PolygonAccent className="right-4 bottom-6 h-12 w-16 opacity-35" />

      <div className="absolute inset-y-0 left-0 z-10 flex w-1/2 items-center px-5 md:px-6">
        <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-wide text-white md:text-xl lg:text-2xl">
          {title}
        </h3>
      </div>

      <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <ResponsiveImage
          src={image}
          alt=""
          ariaHidden
          sizes="(max-width: 768px) 50vw, 18vw"
          className="h-full w-full object-cover object-center opacity-90 mix-blend-soft-light transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${palette.blend} 0%, ${palette.blend}99 22%, transparent 52%)`,
            mixBlendMode: 'multiply',
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{ background: palette.gradient, mixBlendMode: 'color' }}
          aria-hidden
        />
      </div>
    </>
  );

  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
}
