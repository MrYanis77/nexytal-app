import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Brain, HeartPulse, Shield, Scale, Users, Briefcase, CheckCircle2, GraduationCap, Award, UserCheck } from "lucide-react";

export default function Expertises() {
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
      icon: GraduationCap,
      points: [
        "Plans de formation intra/inter-entreprise",
        "Parcours certifiants adaptés aux métiers",
        "Suivi des acquis et mesure d'impact",
        "Formats présentiel, distanciel et hybride"
      ]
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
      icon: Briefcase,
      points: [
        "Audit RH et organisation des équipes",
        "Structuration des processus RH",
        "Accompagnement marque employeur",
        "Pilotage GPEC et fidélisation"
      ]
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
      icon: Brain,
      points: [
        "Coaching de dirigeants et managers",
        "Accompagnement des transitions",
        "Développement du leadership",
        "Amélioration de la performance d'équipe"
      ]
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
      icon: HeartPulse,
      points: [
        "Conseil organisationnel santé",
        "Recrutement profils médicaux",
        "Optimisation parcours patients",
        "Conformité et qualité des pratiques"
      ]
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
      icon: Award,
      points: [
        "Ingénierie pédagogique sur-mesure",
        "Animation de sessions opérationnelles",
        "Évaluation continue des apprenants",
        "Accompagnement des formateurs internes"
      ]
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
      icon: UserCheck,
      points: [
        "Sourcing ciblé multi-canal",
        "Évaluation compétences et soft skills",
        "Accompagnement managers recruteurs",
        "Intégration et suivi post-recrutement"
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
              Domaines d'Expertise
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Nos pôles d'activités
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Découvrez l'ensemble de nos pôles d'accompagnement et de recrutement spécialisés, conçus pour sécuriser, optimiser et propulser votre entreprise.
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
                      Prestations & Accompagnement
                    </h2>
                  </div>
                  <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                    Nos consultants interviennent de manière agile et ciblée pour répondre à vos problématiques de croissance, de sécurité ou de recrutement :
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
