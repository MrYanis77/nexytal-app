import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Shield, Users, Target, Eye, Landmark } from "lucide-react";

export default function Groupe() {
  const values = [
    {
      title: "Rigueur & Excellence",
      description: "Nous appliquons les plus hauts standards de rigueur dans l'ensemble de nos accompagnements juridiques, fiscaux et cybersécurité.",
      icon: Shield,
      color: "text-indigo-500 bg-indigo-500/10"
    },
    {
      title: "Humain & Transmission",
      description: "La conseil et le coaching sont ancrés dans l'écoute, le respect et la volonté constante de faire progresser les talents.",
      icon: Users,
      color: "text-amber-500 bg-amber-500/10"
    },
    {
      title: "Innovation & Vision",
      description: "Pionniers dans l'intégration de l'intelligence artificielle, nous anticipons les mutations technologiques pour nos clients.",
      icon: Target,
      color: "text-purple-500 bg-purple-500/10"
    }
  ];

  return (
    <Layout>
      {/* Page Header - Pure White, Minimal */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-20 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c22d4a] bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full">
              Qui sommes-nous ?
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Le Groupe NEXYTAL
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              Un collectif d'experts nationaux engagés pour la performance, la sécurité et la conformité des entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story & Vision */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#c22d4a]">Notre vocation</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Accompagner les dirigeants face aux mutations de leur écosystème
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                Fondé par des professionnels de la cybersécurité, de l'IA, du recrutement de cadres et du droit des affaires, <strong>NEXYTAL Groupe</strong> est né d'un constat simple : les entreprises ont besoin d'un interlocuteur unique capable de les accompagner de manière transverse sur leurs enjeux de croissance, de sécurité et de conformité réglementaire.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                Aujourd'hui, à travers nos implantations régionales, nous conseillons chaque année des centaines de directions générales. Notre force réside dans la synergie de nos pôles d'expertises, alliant la technicité de la cybersécurité et de l'intelligence artificielle à la rigueur de l'accompagnement juridique et fiscal, sans oublier la gestion des ressources humaines et le recrutement de cadres dirigeants.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Expertise Pluridisciplinaire</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-semibold">Synergie unique de 6 pôles spécialisés.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Ancrage Territorial</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-semibold">Proximité grâce à nos cabinets régionaux.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                  alt="L'équipe NEXYTAL"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#c22d4a]">Notre ADN</p>
                  <p className="text-lg font-bold mt-1">L'excellence au service de l'humain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#c22d4a]">Nos piliers</h2>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Les valeurs qui guident nos actions
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Au quotidien, nos collaborateurs et experts-conseils partagent une vision commune de l'accompagnement d'entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white text-left p-6 space-y-4">
                  <div className={`p-3 rounded-xl w-fit ${val.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">{val.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{val.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Block */}
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl text-left space-y-6 relative overflow-hidden">
              <div className="p-3 bg-white/5 text-[#c22d4a] rounded-xl w-fit border border-white/10">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Notre Vision</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium">
                À l'ère de l'intelligence artificielle et de l'interconnexion globale, l'entreprise moderne ne peut plus fonctionner en silos. La sécurité informatique est indissociable de la gestion des équipes ; la fiscalité et la conformité juridique doivent s'adapter en temps réel aux outils technologiques. Nous croyons en un accompagnement global, agile et éthique pour transformer ces contraintes réglementaires et techniques en leviers de croissance durable.
              </p>
            </div>

            {/* Mission Block */}
            <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-2xl text-left space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl w-fit border border-emerald-500/20">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Notre Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  Garantir la sérénité des dirigeants et libérer le potentiel de leurs collaborateurs. En assurant la résilience technique (cybersécurité), la conformité réglementaire (fiscalité, juridique, santé) et la montée en compétences (coaching stratégique), nous permettons aux organisations de se concentrer sur leur cœur de métier avec un temps d'avance sur leur marché.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200">
                <Link href="/contact">
                  <Button className="bg-[#c22d4a] hover:bg-[#a1233c] text-white font-bold rounded-md flex items-center space-x-2 group">
                    <span>Rejoindre l'aventure</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
