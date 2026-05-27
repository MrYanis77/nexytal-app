import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, HeartPulse, Shield, Scale, Users, ChevronLeft, Compass, Briefcase } from "lucide-react";

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

  // 6 Pôles d'expertises structurés exactement selon le design de l'image de l'utilisateur :
  // - Coins arrondis (rounded-3xl)
  // - Asymétrie bicolore : dégradé coloré élégant à gauche (avec texte, badge d'année/type, logo)
  // - Image réaliste de professionnel de profil à droite (qui s'intègre harmonieusement)
  // - Design d'onglet d'angle en bas à droite pour le logo du pôle
  const expertises = [
    {
      id: "coaching",
      title: "NEXYTAL COACHING",
      subtitle: "CONSEIL & IA",
      year: "2026",
      description: "Coaching de dirigeants, intégration de l'intelligence artificielle dans vos processus décisionnels et conduite du changement technologique.",
      gradient: "from-[#8B307E] to-[#4A1E60]", // Style Violet / Fuchsia
      textColor: "text-purple-100",
      badgeBg: "bg-purple-900/40",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      icon: Brain,
      logoText: "CoachingTalents"
    },
    {
      id: "medical",
      title: "NEXYTAL MÉDICAL",
      subtitle: "SANTÉ & SECTEUR PUBLIC",
      year: "2026",
      description: "Conseil stratégique, audits organisationnels et recrutement spécialisé pour les cliniques, hôpitaux et professionnels de santé.",
      gradient: "from-[#D97706] to-[#B45309]", // Style Orange / Ambre chaleureux
      textColor: "text-amber-500",
      badgeBg: "bg-amber-950/40",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
      icon: HeartPulse,
      logoText: "MedicalTalents"
    },
    {
      id: "recrutement",
      title: "NEXYTAL RECRUTEMENT",
      subtitle: "EXECUTIVE SEARCH",
      year: "2026",
      description: "Cabinet de recrutement spécialisé par approche directe pour l'identification de cadres, experts techniques et dirigeants.",
      gradient: "from-[#1E3A8A] to-[#172554]", // Style Bleu Nuit profond
      textColor: "text-blue-100",
      badgeBg: "bg-blue-950/40",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      icon: Users,
      logoText: "ExecutiveTalents"
    },
    {
      id: "cyber",
      title: "NEXYTAL CYBER",
      subtitle: "AUDIT & SÉCURITÉ",
      year: "2026",
      description: "Diagnostic de vulnérabilité, sécurisation des infrastructures cloud, conformité réglementaire (NIS 2) et gestion de crise cyber.",
      gradient: "from-[#065F46] to-[#064E3B]", // Style Vert Émeraude / Forêt
      textColor: "text-emerald-100",
      badgeBg: "bg-emerald-950/40",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
      icon: Shield,
      logoText: "CyberTalents"
    },
    {
      id: "fiscal",
      title: "NEXYTAL FISCAL",
      subtitle: "JURIDIQUE & CONFORMITÉ",
      year: "2026",
      description: "Accompagnement juridique, fiscal et de structuration d'entreprise pour sécuriser vos opérations et optimiser vos choix stratégiques.",
      gradient: "from-[#312E81] to-[#1E1B4B]", // Style Indigo / Violet Foncé
      textColor: "text-indigo-100",
      badgeBg: "bg-indigo-950/40",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80",
      icon: Scale,
      logoText: "LegalTalents"
    },
    {
      id: "rh",
      title: "NEXYTAL CONSEIL RH",
      subtitle: "GPEC & CLIMAT SOCIAL",
      year: "2026",
      description: "Audit organisationnel, structuration de la marque employeur, gestion des emplois et compétences et qualité de vie au travail (RSE).",
      gradient: "from-[#111827] to-[#030712]", // Style Gris Ardoise sombre / Charbon
      textColor: "text-slate-100",
      badgeBg: "bg-slate-900/40",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80",
      icon: Briefcase,
      logoText: "RHTalents"
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
              Domaines d'Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Nos pôles d'accompagnement spécialisés
            </h2>
            <p className="text-base text-slate-500 font-medium">
              Chaque entité de NEXYTAL Groupe apporte une expertise pointue pour répondre à l'ensemble des exigences de votre organisation.
            </p>
          </div>

          {/* Grid of 6 Containers matching the user's image exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {expertises.map((exp) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={exp.id}
                  className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-row bg-gradient-to-r ${exp.gradient} h-[280px] md:h-[300px] text-left group`}
                >
                  {/* Left Column: Content & Text (60% width) */}
                  <div className="w-[58%] md:w-[62%] p-6 md:p-8 flex flex-col justify-between relative z-10">
                    <div className="space-y-3">
                      {/* Badge "ÉTUDE DE RÉMUNÉRATION / DOMAINE" style */}
                      <div className={`rounded-xl p-3 w-fit ${exp.badgeBg} border border-white/5`}>
                        <p className="text-[10px] font-black tracking-wider text-white uppercase opacity-90 leading-tight">
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
                    <p className="text-xs text-white/80 line-clamp-3 leading-relaxed font-medium">
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

                  {/* Right Column: Profile Image (42% width) */}
                  <div className="w-[42%] md:w-[38%] relative h-full shrink-0">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Radial shadow overlay to blend image into the gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/20"></div>

{/* Angle Tab Logo removed */}
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
            Un projet de recrutement ou d'accompagnement ?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Nos consultants spécialisés vous recontactent sous 24h pour étudier vos besoins et vous proposer une stratégie sur-mesure.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-[#c22d4a] hover:bg-[#a1233c] text-white font-black px-8 py-6 rounded-md shadow-md shadow-rose-500/10 text-base flex items-center space-x-2 mx-auto group">
                <span>Parler à un consultant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
