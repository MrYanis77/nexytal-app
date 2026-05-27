import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Brain, HeartPulse, Shield, Scale, Users, Briefcase, CheckCircle2 } from "lucide-react";

export default function Expertises() {
  const expertises = [
    {
      id: "coaching",
      title: "NEXYTAL COACHING",
      subtitle: "CONSEIL & IA",
      year: "2026",
      description: "Coaching de dirigeants, intégration de l'intelligence artificielle dans vos processus décisionnels et conduite du changement technologique.",
      overlayClass: "bg-gradient-to-r from-[#8B307E]/90 via-[#8B307E]/85 to-[#3b1c54]/75", 
      badgeBg: "bg-white/15",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      icon: Brain,
      points: [
        "Coaching stratégique pour dirigeants & managers",
        "Audit d'intégration de l'IA Générative",
        "Conduite du changement & transformation digitale",
        "Optimisation des flux de travail opérationnels"
      ]
    },
    {
      id: "medical",
      title: "NEXYTAL MÉDICAL",
      subtitle: "SANTÉ & SECTEUR PUBLIC",
      year: "2026",
      description: "Conseil stratégique, audits organisationnels et recrutement spécialisé pour les cliniques, hôpitaux et professionnels de santé.",
      overlayClass: "bg-gradient-to-r from-[#D97706]/90 via-[#D97706]/85 to-[#b45309]/75", 
      badgeBg: "bg-white/15",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
      icon: HeartPulse,
      points: [
        "Recrutement de praticiens & cadres de santé",
        "Audits d'organisation pour établissements de santé",
        "Accompagnement réglementaire & conformité",
        "Optimisation de la qualité de vie au travail (QVT)"
      ]
    },
    {
      id: "recrutement",
      title: "NEXYTAL RECRUTEMENT",
      subtitle: "EXECUTIVE SEARCH",
      year: "2026",
      description: "Cabinet de recrutement spécialisé par approche directe pour l'identification de cadres, experts techniques et dirigeants.",
      overlayClass: "bg-gradient-to-r from-[#1E40AF]/90 via-[#1E40AF]/85 to-[#1e1b4b]/75", 
      badgeBg: "bg-white/15",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      icon: Users,
      points: [
        "Chasse de têtes & approche directe de dirigeants",
        "Recrutement de cadres supérieurs & experts métiers",
        "Évaluation des compétences & assessments de profils",
        "Accompagnement à l'onboarding des nouveaux talents"
      ]
    },
    {
      id: "cyber",
      title: "NEXYTAL CYBER",
      subtitle: "AUDIT & SÉCURITÉ",
      year: "2026",
      description: "Diagnostic de vulnérabilité, sécurisation des infrastructures cloud, conformité réglementaire (NIS 2) et gestion de crise cyber.",
      overlayClass: "bg-gradient-to-r from-[#065F46]/90 via-[#065F46]/85 to-[#022c22]/75", 
      badgeBg: "bg-white/15",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
      icon: Shield,
      points: [
        "Audits de sécurité & tests d'intrusion (Pentest)",
        "Mise en conformité réglementaire (NIS 2, RGPD)",
        "Sécurisation des environnements cloud & réseaux",
        "Sensibilisation & formation des collaborateurs"
      ]
    },
    {
      id: "fiscal",
      title: "NEXYTAL FISCAL",
      subtitle: "JURIDIQUE & CONFORMITÉ",
      year: "2026",
      description: "Accompagnement juridique, fiscal et de structuration d'entreprise pour sécuriser vos opérations et optimiser vos choix stratégiques.",
      overlayClass: "bg-gradient-to-r from-[#B91C1C]/90 via-[#B91C1C]/85 to-[#7f1d1d]/75", 
      badgeBg: "bg-white/15",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80",
      icon: Scale,
      points: [
        "Conseil en structuration juridique d'entreprise",
        "Optimisation fiscale & gestion de la conformité",
        "Accompagnement lors des contrôles administratifs",
        "Secrétariat juridique & rédaction d'actes"
      ]
    },
    {
      id: "rh",
      title: "NEXYTAL CONSEIL RH",
      subtitle: "GPEC & CLIMAT SOCIAL",
      year: "2026",
      description: "Audit organisationnel, structuration de la marque employeur, GPEC et qualité de vie au travail (RSE).",
      overlayClass: "bg-gradient-to-r from-[#0369A1]/90 via-[#0369A1]/85 to-[#0f172a]/75", 
      badgeBg: "bg-white/15",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80",
      icon: Briefcase,
      points: [
        "Gestion Prévisionnelle des Emplois & Compétences",
        "Audit du climat social & dialogue en entreprise",
        "Développement de la Marque Employeur",
        "Accompagnement des démarches RSE"
      ]
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c22d4a] bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full">
              Expertises Métiers
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Nos pôles d'expertises spécialisés
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Découvrez l'ensemble de nos domaines d'intervention stratégiques. Chaque pôle dispose de consultants dédiés pour vous apporter des réponses précises et adaptées.
            </p>
          </div>
        </div>
      </section>

      {/* Expertises List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-24">
          {expertises.map((exp, index) => {
            const IconComponent = exp.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                id={exp.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Left Side: The exact card design with image background and clear overlay */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-row h-[280px] md:h-[300px] text-left group w-full">
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

                    {/* Content Area (60% width) - Positioned above background & overlay */}
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
                        <Link href="/contact">
                          <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-white hover:opacity-90 cursor-pointer group/link">
                            <span>Solliciter ce pôle</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Visual area (42% width) - Keeps spacing to let professional visual show clearly */}
                    <div className="w-[42%] md:w-[38%] relative h-full shrink-0 z-20 pointer-events-none">
                      {/* Empty block to preserve right-side composition, image is already in the absolute background */}
                    </div>
                  </div>
                </div>

                {/* Right Side: Detailed List Points */}
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-rose-50 rounded-lg text-[#c22d4a]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                      Nos domaines d'intervention
                    </h2>
                  </div>
                  <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                    Notre cabinet s'engage à vous fournir un accompagnement d'excellence. Nos méthodologies éprouvées nous permettent d'intervenir sur les thématiques suivantes :
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {exp.points.map((point, i) => (
                      <div key={i} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-bold text-slate-700 leading-tight">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button className="bg-slate-900 hover:bg-slate-800 text-white font-black text-sm px-6 py-5 rounded-md flex items-center space-x-2 group">
                        <span>Échanger sur votre besoin</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Call to Action */}
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
