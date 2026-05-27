import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, HeartPulse, Shield, Scale, Users, ChevronLeft, Compass, Briefcase, BookOpen, UserCheck, Award, GraduationCap } from "lucide-react";

export default function Home() {
  // Carrousel Hero Images & Messages
  const heroSlides = [
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_hero_bg-eqf2ssCfxPWceerTL2UKiv.webp",
      badge: "CONSEIL & RECRUTEMENT",
      title: "Développez vos expertises sectorielles",
      description: "Le partenaire stratégique national pour l'accompagnement, la cybersécurité, l'IA, la fiscalité et le recrutement de vos futurs talents."
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_coaching-Xuxi4vHHRQ2kjxhffsggcY.webp",
      badge: "INTELLIGENCE ARTIFICIELLE",
      title: "Accompagner la transition technologique",
      description: "Coaching de dirigeants et intégration de l'intelligence artificielle générative au cœur de vos processus opérationnels."
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_cybersecurity-TBbZP2gHBp3hiXMxYVFQe8.webp",
      badge: "RÉSILIENCE NUMÉRIQUE",
      title: "Sécuriser vos infrastructures cloud",
      description: "Audits de sécurité, tests d'intrusion et formation de sensibilisation de vos collaborateurs face aux cybermenaces."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // 6 Pôles d'expertises mis à jour selon pasted_content.txt avec des images claires et adaptées
  const expertises = [
    {
      id: "formations",
      title: "NEXYTAL FORMATIONS",
      subtitle: "FORMATION PROFESSIONNELLE",
      year: "2026",
      description: "Programmes de montée en compétences pour vos équipes : management, outils digitaux, posture commerciale et efficacité opérationnelle.",
      overlayClass: "bg-gradient-to-r from-[#1E3A8A]/90 via-[#1E3A8A]/85 to-[#0c4a6e]/75",
      badgeBg: "bg-white/15",
      // Image 1 : Formation claire (salle de classe moderne / tableau)
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
      icon: GraduationCap
    },
    {
      id: "rh",
      title: "NEXYTAL RH",
      subtitle: "RESSOURCES HUMAINES",
      year: "2026",
      description: "Structuration RH, marque employeur, pilotage des talents et accompagnement des transformations humaines.",
      overlayClass: "bg-gradient-to-r from-[#0F766E]/90 via-[#0F766E]/85 to-[#134e4a]/75",
      badgeBg: "bg-white/15",
      // Image 2 : Ressources humaines (collaboration d'équipe souriante)
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      icon: Briefcase
    },
    {
      id: "coaching",
      title: "NEXYTAL COACHING",
      subtitle: "LEADERSHIP & PERFORMANCE",
      year: "2026",
      description: "Coaching individuel et collectif pour dirigeants, managers et équipes afin d'accélérer la performance durable.",
      overlayClass: "bg-gradient-to-r from-[#8B307E]/90 via-[#8B307E]/85 to-[#3b1c54]/75",
      badgeBg: "bg-white/15",
      // Image 3 : Coaching emploi (entretien individuel constructif / bienveillant)
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      icon: Brain
    },
    {
      id: "medicale",
      title: "NEXYTAL MÉDICALE",
      subtitle: "SANTÉ & MÉDICAL",
      year: "2026",
      description: "Accompagnement des structures de santé : organisation, recrutement spécialisé et amélioration continue des parcours.",
      overlayClass: "bg-gradient-to-r from-[#D97706]/90 via-[#D97706]/85 to-[#b45309]/75",
      badgeBg: "bg-white/15",
      // Image 4 : Médecine / santé (stéthoscope / médecin bienveillant)
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
      icon: HeartPulse
    },
    {
      id: "trainer",
      title: "NEXYTAL TRAINER",
      subtitle: "TRAINING & DELIVERY",
      year: "2026",
      description: "Conception et animation de parcours de formation sur-mesure, présentiel et distanciel, avec suivi de progression.",
      overlayClass: "bg-gradient-to-r from-[#B45309]/90 via-[#B45309]/85 to-[#78350f]/75",
      badgeBg: "bg-white/15",
      // Image 5 : Trainer / Formateur (animation d'atelier / workshop)
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
      icon: Award
    },
    {
      id: "recrutements",
      title: "NEXYTAL RECRUTEMENTS",
      subtitle: "TALENT ACQUISITION",
      year: "2026",
      description: "Sourcing ciblé, évaluation approfondie et recrutement de profils clés pour renforcer vos équipes durablement.",
      overlayClass: "bg-gradient-to-r from-[#1E40AF]/90 via-[#1E40AF]/85 to-[#1e1b4b]/75",
      badgeBg: "bg-white/15",
      // Image 6 : Recrutement (poignée de main chaleureuse / embauche)
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      icon: UserCheck
    }
  ];

  return (
    <Layout>
      {/* 1. Hero Section (Dynamic Carousel with fade transition) */}
      <section className="relative h-[500px] md:h-[620px] bg-slate-950 overflow-hidden text-white">
        {/* Carousel slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Slide Background Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
            />

            {/* Slide Content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 md:px-6 w-full text-left">
                <div className="max-w-3xl space-y-6">
                  <span className="inline-block bg-[#c22d4a] text-white text-xs font-extrabold tracking-widest px-3 py-1.5 rounded uppercase">
                    {slide.badge}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-slate-300 max-w-2xl font-medium leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 pt-2">
                    <Link href="/expertises">
                      <Button className="bg-[#c22d4a] hover:bg-[#a1233c] text-white font-bold text-sm px-6 py-5 rounded-md flex items-center space-x-2 group">
                        <span>Nos expertises</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-white/20 hover:border-white/40 text-white bg-white/5 hover:bg-white/10 font-bold text-sm px-6 py-5 rounded-md">
                        Prendre RDV
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/10 backdrop-blur-sm transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/10 backdrop-blur-sm transition-all cursor-pointer"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? "bg-[#c22d4a] w-8" : "bg-white/40 hover:bg-white/60"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* 2. Main Body: 6 Expertises Containers (Linking Talents Cards Design) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c22d4a] bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full">
              Nos pôles d'activités
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Domaines d'Expertise
            </h2>
            <p className="text-base text-slate-500 font-medium">
              Découvrez l'ensemble de nos pôles d'accompagnement et de recrutement spécialisés, conçus pour sécuriser, optimiser et propulser votre entreprise.
            </p>
          </div>

          {/* Grid of 6 Containers matching the user's image exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {expertises.map((exp) => {
              return (
                <div
                  key={exp.id}
                  className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-row h-[280px] md:h-[300px] text-left group"
                >
                  {/* Image de fond globale s'étendant sur TOUTE la carte */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay de couleur CLAIRE, lumineuse et vibrante par-dessus (pas sombre) */}
                  <div className={`absolute inset-0 z-10 ${exp.overlayClass} transition-opacity duration-300`}></div>

                  {/* Left Column: Content & Text (60% width) - Positioned above background & overlay */}
                  <div className="w-[58%] md:w-[62%] p-6 md:p-8 flex flex-col justify-between relative z-20">
                    <div className="space-y-3">
                      {/* Badge "ÉTUDE DE RÉMUNÉRATION / DOMAINE" style */}
                      <div className={`rounded-xl p-3 w-fit ${exp.badgeBg} border border-white/10 backdrop-blur-sm`}>
                        <p className="text-[10px] font-black tracking-wider text-white uppercase opacity-95 leading-tight">
                          {exp.subtitle}
                        </p>
                        <p className="text-lg md:text-xl font-black text-white mt-1">
                          {exp.year}
                        </p>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight">
                        {exp.title}
                      </h3>
                    </div>

                    {/* Short description */}
                    <p className="text-xs text-white/90 line-clamp-3 leading-relaxed font-semibold">
                      {exp.description}
                    </p>

                    {/* CTA Link */}
                    <div className="pt-2">
                      <Link href="/expertises">
                        <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-white hover:opacity-90 cursor-pointer group/link">
                          <span>Découvrir le pôle</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual area (42% width) - Keeps spacing to let professional visual show clearly */}
                  <div className="w-[42%] md:w-[38%] relative h-full shrink-0 z-20 pointer-events-none">
                    {/* Empty block to preserve right-side composition, image is already in the absolute background */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Global Call to Action (Pure White with subtle border) */}
      <section className="bg-slate-50 border-t border-slate-100 py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-6 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#c22d4a]">
            Contactez nos cabinets
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Une synergie d'expertises unique
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Parce que vos enjeux sont interconnectés, nos cabinets collaborent au quotidien. Un audit de cybersécurité s'accompagnera de la rédaction de vos chartes informatiques de conformité, tandis qu'un recrutement stratégique bénéficiera de l'audit de votre climat social.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-[#c22d4a] hover:bg-[#a1233c] text-white font-black px-8 py-6 rounded-md shadow-md shadow-rose-500/10 text-base flex items-center space-x-2 mx-auto group">
                <span>Parler à un conseiller</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
