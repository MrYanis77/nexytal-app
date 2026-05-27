import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  Brain,
  HeartPulse,
  Scale,
  Users,
  CheckCircle2,
  Briefcase
} from "lucide-react";

export default function Expertises() {
  const expertises = [
    {
      id: "coaching",
      title: "NEXYTAL COACHING",
      subtitle: "CONSEIL & IA",
      year: "2026",
      description: "Coaching de dirigeants, intégration de l'intelligence artificielle dans vos processus décisionnels et conduite du changement technologique.",
      gradient: "from-[#8B307E] to-[#4A1E60]",
      textColor: "text-purple-600",
      badgeBg: "bg-purple-900/40",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      icon: Brain,
      logoText: "CoachingTalents",
      features: [
        "Coaching individuel de dirigeants et managers",
        "Ateliers d'intégration de l'IA générative en entreprise",
        "Conduite du changement et transformation numérique",
        "Alignement des équipes de direction sur la stratégie"
      ]
    },
    {
      id: "medical",
      title: "NEXYTAL MÉDICAL",
      subtitle: "SANTÉ & SECTEUR PUBLIC",
      year: "2026",
      description: "Conseil stratégique, audits organisationnels et recrutement spécialisé pour les cliniques, hôpitaux et professionnels de santé.",
      gradient: "from-[#D97706] to-[#B45309]",
      textColor: "text-amber-600",
      badgeBg: "bg-amber-950/40",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
      icon: HeartPulse,
      logoText: "MedicalTalents",
      features: [
        "Audit organisationnel des établissements de santé",
        "Conseil en structuration et gestion d'équipes de soins",
        "Accompagnement réglementaire et conformité médicale",
        "Recrutement de profils médicaux et paramédicaux"
      ]
    },
    {
      id: "recrutement",
      title: "NEXYTAL RECRUTEMENT",
      subtitle: "EXECUTIVE SEARCH",
      year: "2026",
      description: "Cabinet de recrutement spécialisé par approche directe pour l'identification de cadres, experts techniques et dirigeants.",
      gradient: "from-[#1E3A8A] to-[#172554]",
      textColor: "text-blue-600",
      badgeBg: "bg-blue-950/40",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      icon: Users,
      logoText: "ExecutiveTalents",
      features: [
        "Chasse de têtes et approche directe (Executive Search)",
        "Évaluation approfondie des compétences (Assessment Centers)",
        "Recrutement de profils pénuriques (IT, Cybersécurité, Santé)",
        "Conseil en marque employeur et attractivité des talents"
      ]
    },
    {
      id: "cyber",
      title: "NEXYTAL CYBER",
      subtitle: "AUDIT & SÉCURITÉ",
      year: "2026",
      description: "Diagnostic de vulnérabilité, sécurisation des infrastructures cloud, conformité réglementaire (NIS 2) et gestion de crise cyber.",
      gradient: "from-[#065F46] to-[#064E3B]",
      textColor: "text-emerald-600",
      badgeBg: "bg-emerald-950/40",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
      icon: Shield,
      logoText: "CyberTalents",
      features: [
        "Audits de sécurité et tests d'intrusion (Pentests)",
        "Sensibilisation et formation des collaborateurs contre le phishing",
        "Accompagnement à la conformité réglementaire (RGPD, NIS 2)",
        "Plans de reprise d'activité (PRA) et gestion d'incidents"
      ]
    },
    {
      id: "fiscal",
      title: "NEXYTAL FISCAL",
      subtitle: "JURIDIQUE & CONFORMITÉ",
      year: "2026",
      description: "Accompagnement juridique, fiscal et de structuration d'entreprise pour sécuriser vos opérations et optimiser vos choix stratégiques.",
      gradient: "from-[#312E81] to-[#1E1B4B]",
      textColor: "text-indigo-600",
      badgeBg: "bg-indigo-950/40",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80",
      icon: Scale,
      logoText: "LegalTalents",
      features: [
        "Audit fiscal et optimisation des structures sociétaires",
        "Secrétariat juridique annuel et rédaction de contrats commerciaux",
        "Accompagnement lors de fusions, acquisitions ou cessions",
        "Gestion fiscale et sociale pour dirigeants d'entreprises"
      ]
    },
    {
      id: "rh",
      title: "NEXYTAL CONSEIL RH",
      subtitle: "GPEC & CLIMAT SOCIAL",
      year: "2026",
      description: "Audit organisationnel, structuration de la marque employeur, gestion des emplois et compétences et qualité de vie au travail (RSE).",
      gradient: "from-[#111827] to-[#030712]",
      textColor: "text-slate-800",
      badgeBg: "bg-slate-900/40",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80",
      icon: Briefcase,
      logoText: "RHTalents",
      features: [
        "Mise en place d'accords d'entreprise et conformité CSE",
        "Gestion Prévisionnelle des Emplois et des Compétences (GPEC)",
        "Audits de climat social et médiation professionnelle",
        "Déploiement de politiques RSE et de qualité de vie au travail"
      ]
    }
  ];

  return (
    <Layout>
      {/* Page Header - Pure White, Minimal */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-20 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c22d4a] bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full">
              Nos pôles d'activités
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Domaines d'Expertise
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              Découvrez l'ensemble de nos pôles d'accompagnement et de recrutement spécialisés, conçus pour sécuriser, optimiser et propulser votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section - Same Layout as Home (Bicolore Asymétrique) but with detailed bullet features inside a dropdown or simple layout */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16">
            {expertises.map((exp) => {
              const IconComponent = exp.icon;
              return (
                <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: The exact card from the image (lg:col-span-6) */}
                  <div className="lg:col-span-6">
                    <div
                      className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-row bg-gradient-to-r ${exp.gradient} h-[280px] md:h-[300px] text-left group w-full`}
                    >
                      {/* Left Column inside card */}
                      <div className="w-[58%] md:w-[62%] p-6 md:p-8 flex flex-col justify-between relative z-10">
                        <div className="space-y-3">
                          <div className={`rounded-xl p-3 w-fit ${exp.badgeBg} border border-white/5`}>
                            <p className="text-[10px] font-black tracking-wider text-white uppercase opacity-90 leading-tight">
                              {exp.subtitle}
                            </p>
                            <p className="text-lg md:text-xl font-black text-white mt-1">
                              {exp.year}
                            </p>
                          </div>
                          <h3 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-xs text-white/80 line-clamp-3 leading-relaxed font-medium">
                          {exp.description}
                        </p>
                        <div className="pt-2">
                          <span className="text-xs font-extrabold text-white/90">
                            Pôle actif
                          </span>
                        </div>
                      </div>

                      {/* Right Column inside card */}
                      <div className="w-[42%] md:w-[38%] relative h-full shrink-0">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/20"></div>
{/* Angle Tab Logo removed */}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Bullet Points & Contact Action (lg:col-span-6) */}
                  <div className="lg:col-span-6 text-left space-y-6 lg:pl-6">
                    <h3 className="text-2xl font-black text-slate-900">
                      Prestations & Accompagnement
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      Nos consultants interviennent de manière agile et ciblée pour répondre à vos problématiques de croissance, de sécurité ou de recrutement :
                    </p>
                    <ul className="space-y-3">
                      {exp.features.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-3 text-sm text-slate-700 font-medium">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${exp.textColor}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link href="/contact">
                        <Button className="bg-[#c22d4a] hover:bg-[#a1233c] text-white font-bold rounded-md flex items-center space-x-2 group">
                          <span>Solliciter ce pôle d'expertise</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Synergie Section */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">Une synergie d'expertises unique</h2>
          <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed text-sm md:text-base font-medium">
            Parce que vos enjeux sont interconnectés, nos cabinets collaborent au quotidien. Un audit de cybersécurité (NEXYTAL Cyber) s'accompagnera de la rédaction de vos chartes informatiques de conformité (NEXYTAL Fiscal), tandis qu'un recrutement stratégique (NEXYTAL Recrutement) bénéficiera de l'audit de votre climat social (NEXYTAL Conseil RH).
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-[#c22d4a] hover:bg-[#a1233c] text-white font-black px-8 py-6 rounded-md shadow-lg">
                Parler à un conseiller
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
