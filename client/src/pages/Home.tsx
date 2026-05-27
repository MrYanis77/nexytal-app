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
  TrendingUp,
  Download,
  CheckCircle2,
  FileText
} from "lucide-react";

export default function Home() {
  const expertises = [
    {
      id: "coaching",
      title: "NEXYTAL Coaching",
      subtitle: "Accompagnement & IA",
      description: "Coaching de dirigeants, intégration de l'intelligence artificielle dans vos processus décisionnels et conduite du changement technologique.",
      icon: Brain,
      color: "from-purple-600 to-indigo-700",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_coaching-Xuxi4vHHRQ2kjxhffsggcY.webp"
    },
    {
      id: "medical",
      title: "NEXYTAL Médical",
      subtitle: "Santé & Secteur Public",
      description: "Conseil stratégique et formations spécialisées pour les professionnels de santé, les cliniques, les hôpitaux et la gestion des équipes médicales.",
      icon: HeartPulse,
      color: "from-rose-500 to-red-600",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_medical-ZxKYz7cFdnHFi88Xrqw4rZ.webp"
    },
    {
      id: "recrutement",
      title: "NEXYTAL Recrutement",
      subtitle: "Talents & Executive Search",
      description: "Cabinet de recrutement spécialisé par approche directe pour l'identification de cadres, experts techniques et dirigeants à forte valeur ajoutée.",
      icon: Users,
      color: "from-amber-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "trainers",
      title: "NEXYTAL Trainers",
      subtitle: "Organisme de Formation",
      description: "Formations professionnelles certifiantes et diplômantes en management, compétences numériques, transition écologique et efficacité commerciale.",
      icon: BookOpen,
      color: "from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "rh",
      title: "NEXYTAL RH",
      subtitle: "Conseil & Accompagnement",
      description: "Audit organisationnel, structuration de la marque employeur, gestion prévisionnelle des emplois et compétences (GPEC) et politique RSE.",
      icon: CheckCircle2,
      color: "from-emerald-600 to-teal-700",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cyber",
      title: "NEXYTAL Cybersécurité",
      subtitle: "Audit & Résilience",
      description: "Diagnostic de vulnérabilité, sécurisation des infrastructures cloud, formation de sensibilisation des collaborateurs et gestion de crise cyber.",
      icon: Shield,
      color: "from-slate-700 to-slate-900",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_cybersecurity-TBbZP2gHBp3hiXMxYVFQe8.webp"
    }
  ];

  const featuredStudies = [
    {
      title: "Étude de Rémunération Nationale 2026",
      category: "Fonctions Support & Management",
      description: "Découvrez notre analyse complète des grilles salariales en France pour l'année 2026, incluant les tendances du recrutement post-IA.",
      color: "border-l-4 border-purple-500",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Baromètre de l'Emploi Médical & Santé",
      category: "Secteur Médical",
      description: "Analyse approfondie des besoins en recrutement, des pénuries de talents et des nouvelles exigences de formation pour les soignants.",
      color: "border-l-4 border-rose-500",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Rapport Cybersécurité & PME 2026",
      category: "Technologie & Risques",
      description: "Un état des lieux exhaustif des menaces actuelles, des obligations réglementaires et des solutions de formation pour sécuriser votre entreprise.",
      color: "border-l-4 border-slate-700",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <Layout>
      {/* 1. Hero Section (ALT RH Inspired Form, Dark, Massive, Deep Blue with glowing background) */}
      <section className="relative bg-[#0B192C] text-white py-20 md:py-32 overflow-hidden">
        {/* Abstract Glowing Background Image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_hero_bg-eqf2ssCfxPWceerTL2UKiv.webp"
            alt="High tech glow"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#F17A28] animate-ping"></span>
                <span>Nouveauté 2026 : Intégration IA & Cybersécurité</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Développez votre expertise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F17A28] via-amber-500 to-orange-400">
                  dans les secteurs clés
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                NEXYTAL Groupe est le partenaire stratégique national pour vos enjeux de formation, d'accompagnement RH, de cybersécurité, de fiscalité et d'intelligence artificielle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/expertises">
                  <Button className="bg-[#F17A28] hover:bg-[#d66218] text-white font-bold text-base px-8 py-6 rounded-md shadow-lg shadow-orange-500/10 transition-all duration-300 flex items-center justify-center space-x-2 group active:scale-95">
                    <span>Découvrir nos expertises</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white bg-slate-800/40 hover:bg-slate-800/70 font-bold text-base px-8 py-6 rounded-md transition-all duration-300">
                    Prendre rendez-vous
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Showcase (High-end card stack) */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 group">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/9HMyiv9EyN2y8UvBTTkJTq/nexytal_coaching-Xuxi4vHHRQ2kjxhffsggcY.webp"
                  alt="Coaching NEXYTAL"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="text-xs font-bold text-[#F17A28] uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded">
                    Coaching & Stratégie
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">NEXYTAL Coaching</h3>
                  <p className="text-sm text-slate-300 mt-1">L'alliance de l'accompagnement humain et de l'intelligence artificielle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar (ALT RH Style stats bar) */}
      <section className="bg-[#070F1E] border-y border-slate-800 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-black text-[#F17A28]">98%</p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-400">Taux de satisfaction</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-black text-[#F17A28]">15+</p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-400">Implantations régionales</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-black text-[#F17A28]">12 000+</p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-400">Professionnels formés</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-black text-[#F17A28]">24h</p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-400">Délai de réponse garanti</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Expertises Section (NEXYTAL content, modern grid presentation) */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#F17A28]">Nos pôles d'excellence</h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Une offre globale structurée par spécialités
            </p>
            <p className="text-base text-slate-600">
              Chaque entité de NEXYTAL Groupe apporte une expertise pointue et des solutions adaptées aux exigences réglementaires et technologiques de votre secteur.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((exp) => {
              const IconComponent = exp.icon;
              return (
                <Card key={exp.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col group h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-tr ${exp.color} text-white shadow-md`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                        {exp.subtitle}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between text-left space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-[#F17A28] transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <Link href="/expertises">
                        <div className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#F17A28] hover:text-[#d66218] transition-colors cursor-pointer group/link">
                          <span>En savoir plus</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Resources / Studies Section (Linking Talents Inspired Content) */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="text-left space-y-4 max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#F17A28]">Études & Publications</h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Décryptez les tendances du marché
              </p>
              <p className="text-base text-slate-600">
                Nos experts publient régulièrement des baromètres, guides pratiques et études de rémunération sectorielles pour vous guider dans vos décisions stratégiques.
              </p>
            </div>
            <div>
              <Link href="/ressources">
                <Button className="bg-[#0B192C] hover:bg-slate-800 text-white font-bold px-6 py-5 rounded-md flex items-center space-x-2">
                  <span>Toutes les ressources</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Studies Grid (Linking Talents Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left ${study.color} group`}
              >
                <div className="p-6 space-y-4">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F17A28] transition-colors duration-200">
                    {study.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/ressources">
                    <Button className="w-full bg-white hover:bg-[#F17A28] hover:text-white text-slate-800 border border-slate-200 hover:border-[#F17A28] font-bold py-5 rounded-md flex items-center justify-center space-x-2 shadow-sm transition-all duration-300">
                      <Download className="w-4 h-4" />
                      <span>Télécharger l'étude</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trust & Certifications (ALT RH Qualiopi Banner) */}
      <section className="bg-[#0B192C] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(241,122,40,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 text-left space-y-4">
              <div className="flex items-center space-x-2 text-[#F17A28]">
                <Award className="w-6 h-6" />
                <span className="font-bold tracking-wide uppercase text-sm">Garantie de Qualité Nationale</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                Un organisme certifié Qualiopi pour vos financements
              </h3>
              <p className="text-slate-300 max-w-3xl leading-relaxed text-sm md:text-base">
                NEXYTAL Trainers est agréé au titre des actions de formation. Nos parcours certifiants et diplômants sont éligibles aux différents dispositifs de financement (CPF, OPCO, Transitions Pro, Pôle Emploi). Notre équipe vous accompagne intégralement dans le montage de vos dossiers de prise en charge.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex flex-col items-center text-center space-y-3 w-full max-w-xs shadow-xl">
                <div className="w-16 h-16 rounded-full bg-[#F17A28]/20 flex items-center justify-center text-[#F17A28]">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-black text-white text-lg">Certification Qualiopi</p>
                  <p className="text-xs text-slate-400 mt-1">Délivrée au titre de la catégorie : Actions de formation</p>
                </div>
                <div className="pt-2 w-full border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">République Française</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
