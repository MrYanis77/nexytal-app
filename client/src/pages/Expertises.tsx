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
  BookOpen,
  Award,
  CheckCircle2
} from "lucide-react";

export default function Expertises() {
  const expertises = [
    {
      id: "coaching",
      title: "NEXYTAL Coaching",
      subtitle: "Accompagnement & IA",
      description: "Coaching de dirigeants, intégration de l'intelligence artificielle dans vos processus décisionnels et conduite du changement technologique.",
      icon: Brain,
      color: "from-purple-600 to-indigo-700",
      textColor: "text-purple-600",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_coaching-Xuxi4vHHRQ2kjxhffsggcY.webp",
      features: [
        "Coaching individuel de dirigeants et managers",
        "Ateliers d'intégration de l'IA générative en entreprise",
        "Conduite du changement et transformation numérique",
        "Alignement des équipes de direction sur la stratégie"
      ]
    },
    {
      id: "medical",
      title: "NEXYTAL Médical",
      subtitle: "Santé & Secteur Public",
      description: "Conseil stratégique et formations spécialisées pour les professionnels de santé, les cliniques, les hôpitaux et la gestion des équipes médicales.",
      icon: HeartPulse,
      color: "from-rose-500 to-red-600",
      textColor: "text-rose-600",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_medical-ZxKYz7cFdnHFi88Xrqw4rZ.webp",
      features: [
        "Audit organisationnel des établissements de santé",
        "Formations certifiantes pour le personnel soignant",
        "Accompagnement réglementaire et conformité médicale",
        "Recrutement de profils médicaux et paramédicaux"
      ]
    },
    {
      id: "recrutement",
      title: "NEXYTAL Recrutement",
      subtitle: "Talents & Executive Search",
      description: "Cabinet de recrutement spécialisé par approche directe pour l'identification de cadres, experts techniques et dirigeants à forte valeur ajoutée.",
      icon: Users,
      color: "from-amber-500 to-orange-600",
      textColor: "text-amber-600",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      features: [
        "Chasse de têtes et approche directe (Executive Search)",
        "Évaluation approfondie des compétences (Assessment Centers)",
        "Recrutement de profils pénuriques (IT, Cybersécurité, Santé)",
        "Conseil en marque employeur et attractivité des talents"
      ]
    },
    {
      id: "trainers",
      title: "NEXYTAL Trainers",
      subtitle: "Organisme de Formation",
      description: "Formations professionnelles certifiantes et diplômantes en management, compétences numériques, transition écologique et efficacité commerciale.",
      icon: BookOpen,
      color: "from-blue-600 to-cyan-600",
      textColor: "text-blue-600",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
      features: [
        "Formations éligibles CPF et certifiées Qualiopi",
        "Programmes sur-mesure en présentiel ou e-learning",
        "Ingénierie pédagogique et plans de développement des compétences",
        "Accompagnement administratif aux demandes de financement"
      ]
    },
    {
      id: "rh",
      title: "NEXYTAL RH",
      subtitle: "Conseil & Accompagnement",
      description: "Audit organisationnel, structuration de la marque employeur, gestion prévisionnelle des emplois et compétences (GPEC) et politique RSE.",
      icon: CheckCircle2,
      color: "from-emerald-600 to-teal-700",
      textColor: "text-emerald-600",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
      features: [
        "Mise en place d'accords d'entreprise et conformité CSE",
        "Gestion Prévisionnelle des Emplois et des Compétences (GPEC)",
        "Audits de climat social et médiation professionnelle",
        "Déploiement de politiques RSE et de qualité de vie au travail"
      ]
    },
    {
      id: "cyber",
      title: "NEXYTAL Cybersécurité",
      subtitle: "Audit & Résilience",
      description: "Diagnostic de vulnérabilité, sécurisation des infrastructures cloud, formation de sensibilisation des collaborateurs et gestion de crise cyber.",
      icon: Shield,
      color: "from-slate-700 to-slate-900",
      textColor: "text-slate-800",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_cybersecurity-TBbZP2gHBp3hiXMxYVFQe8.webp",
      features: [
        "Audits de sécurité et tests d'intrusion (Pentests)",
        "Sensibilisation et formation des collaborateurs contre le phishing",
        "Accompagnement à la conformité réglementaire (RGPD, NIS 2)",
        "Plans de reprise d'activité (PRA) et gestion d'incidents"
      ]
    },
    {
      id: "fiscal",
      title: "NEXYTAL Fiscal & Juridique",
      subtitle: "Conformité & Conseil d'Affaires",
      description: "Accompagnement juridique, fiscal et de structuration d'entreprise pour sécuriser vos opérations et optimiser vos choix stratégiques.",
      icon: Scale,
      color: "from-indigo-600 to-violet-700",
      textColor: "text-indigo-600",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      features: [
        "Audit fiscal et optimisation des structures sociétaires",
        "Secrétariat juridique annuel et rédaction de contrats commerciaux",
        "Accompagnement lors de fusions, acquisitions ou cessions",
        "Gestion fiscale et sociale pour dirigeants d'entreprises"
      ]
    }
  ];

  return (
    <Layout>
      {/* Page Header (ALT RH Inspired, Dark Blue Banner) */}
      <section className="bg-[#0B192C] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_120%,rgba(241,122,40,0.1),transparent_40%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-left">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-300">
              <span>Expertises</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Nos Domaines d'Expertise
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Découvrez la richesse et la technicité de nos différents pôles d'activités, conçus pour répondre à l'ensemble des besoins de votre organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section (Same Presentation as Home, but with detailed features list) */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {expertises.map((exp) => {
              const IconComponent = exp.icon;
              return (
                <Card key={exp.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col group text-left">
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${exp.color} text-white shadow-md`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                        {exp.subtitle}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#F17A28] transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Features list (Specific to detailed page) */}
                      <div className="pt-4 border-t border-slate-100 space-y-2.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Prestations phares :</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                          {exp.features.map((feat, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${exp.textColor}`} />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pt-6">
                      <Link href="/contact">
                        <Button className="bg-[#F17A28] hover:bg-[#d66218] text-white font-bold rounded-md flex items-center space-x-2 group">
                          <span>Solliciter ce pôle</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality commitment */}
      <section className="bg-[#0B192C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-6">
          <Award className="w-12 h-12 text-[#F17A28] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Une synergie d'expertises unique</h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Parce que vos enjeux sont interconnectés, nos experts collaborent au quotidien. Un audit de cybersécurité peut déboucher sur un plan de formation de vos équipes (NEXYTAL Trainers), tandis qu'un projet d'intégration d'IA s'accompagnera d'une validation de conformité juridique (NEXYTAL Fiscal & Juridique).
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-[#F17A28] hover:bg-[#d66218] text-white font-bold px-8 py-6 rounded-md shadow-lg">
                Parler à un conseiller
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
