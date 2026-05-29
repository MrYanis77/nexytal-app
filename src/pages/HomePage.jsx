/**
 * Page d'accueil Nexytal
 */
import { useState, useEffect } from 'react';
import SEOHead from '../components/SEO/SEOHead';
import HeroVideo from '../components/HeroVideo';
import HomeHeroSlide from '../components/Home/HomeHeroSlide';
import HomeExpertiseCard from '../components/Home/HomeExpertiseCard';
import { heroSlides, expertises } from '../data/nexytal-home';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white antialiased">
      <SEOHead
        title="Nexytal — Expertises diplômantes, certifiantes & accompagnement RH"
        description="Titres professionnels reconnus par l'État, expertises certifiantes éligibles CPF, accompagnement RH et recrutement spécialisé pour les entreprises et les particuliers."
        canonical="https://nexytal.com/accueil"
      />

      {/* Hero carousel */}
      <section className="group relative flex min-h-[620px] items-center overflow-hidden md:min-h-[680px]">
        <div className="absolute inset-0 z-0 bg-primary hero-slide-enter" key={`bg-${currentSlide}`}>
          <HeroVideo
            video={slide.video}
            showPoster={false}
            priority={currentSlide === 0}
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-accent/20 to-white" />

        <div className="container relative z-20 mx-auto px-6 pb-20 pt-28 md:pb-24 md:pt-32">
          <div key={currentSlide} className="hero-content-enter">
            <HomeHeroSlide slide={slide} />          </div>
        </div>

        <button
          type="button"
          onClick={() =>
            setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
          }
          className="absolute left-2 md:left-6 inset-y-0 z-30 my-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white opacity-0 transition-all hover:bg-black/50 group-hover:opacity-100"
          aria-label="Slide précédent"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-2 md:right-6 inset-y-0 z-30 my-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white opacity-0 transition-all hover:bg-black/50 group-hover:opacity-100"
          aria-label="Slide suivant"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-10 bg-accent' : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Thème ${item.theme}`}
            />
          ))}
        </div>
      </section>

      {/* Expertises */}
      <section className="mx-auto max-w-container-2xl px-6 pb-16 pt-16 md:pt-20">
        <div className="mb-10 flex items-start gap-4">
          <img
            src="/assets/logo_nexytal.png"
            alt=""
            aria-hidden
            className="mt-1 h-10 w-auto shrink-0 object-contain md:h-12"
          />
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Nos Expertises
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {expertises.map((item) => (
            <HomeExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes heroContentIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-slide-enter { animation: heroFadeIn 0.7s ease-out both; }
        .hero-content-enter { animation: heroContentIn 0.45s ease-out both; }
      `}</style>
    </div>
  );
}
