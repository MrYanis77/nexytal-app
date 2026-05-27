import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Search, FileText, Calendar, Filter, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Ressources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Études", "Actualités", "IA & Technologie", "RH & Recrutement", "Juridique & Fiscal"];

  const resources = [
    {
      title: "Étude de Rémunération Nationale 2026",
      category: "RH & Recrutement",
      type: "Études",
      date: "Mai 2026",
      description: "Analyse complète des grilles salariales en France pour l'année 2026, incluant les tendances du recrutement post-IA et les métiers émergents.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
      downloadUrl: "#"
    },
    {
      title: "Baromètre de l'Emploi Médical & Santé",
      category: "RH & Recrutement",
      type: "Études",
      date: "Avril 2026",
      description: "Analyse approfondie des besoins en recrutement, des pénuries de talents et des nouvelles exigences de formation pour les soignants.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80",
      downloadUrl: "#"
    },
    {
      title: "Rapport Cybersécurité & PME 2026",
      category: "IA & Technologie",
      type: "Études",
      date: "Mars 2026",
      description: "Un état des lieux exhaustif des menaces actuelles, des obligations réglementaires (NIS 2) et des solutions de formation pour sécuriser votre entreprise.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80",
      downloadUrl: "#"
    },
    {
      title: "Guide Pratique : Intégrer l'IA Générative dans vos Processus RH",
      category: "IA & Technologie",
      type: "Actualités",
      date: "Février 2026",
      description: "Fiches méthodologiques et cas d'usage concrets pour utiliser ChatGPT, Claude et d'autres IA dans la rédaction d'offres et le sourcing.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80",
      downloadUrl: "#"
    },
    {
      title: "Loi de Finances 2026 : Ce qui change pour les PME",
      category: "Juridique & Fiscal",
      type: "Actualités",
      date: "Janvier 2026",
      description: "Synthèse claire et opérationnelle des nouvelles mesures fiscales, des seuils de taxation et des opportunités d'optimisation légale.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=500&q=80",
      downloadUrl: "#"
    },
    {
      title: "Rapport National sur le Télétravail et l'Engagement des Collaborateurs",
      category: "RH & Recrutement",
      type: "Études",
      date: "Décembre 2025",
      description: "Une enquête menée auprès de 5 000 salariés français sur les modèles hybrides, la santé mentale au travail et la fidélisation des talents.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=500&q=80",
      downloadUrl: "#"
    }
  ];

  const handleDownload = (title: string) => {
    toast.success(`Le téléchargement de "${title}" a démarré !`, {
      description: "Votre document sera disponible dans quelques instants.",
      duration: 4000,
    });
  };

  const filteredResources = resources.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || res.category === selectedCategory || res.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Page Header (ALT RH Inspired, Dark Blue Banner) */}
      <section className="bg-[#0B192C] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(241,122,40,0.1),transparent_40%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-left">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-300">
              <span>Ressources</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Études Métiers & Ressources
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Téléchargez nos analyses exclusives, livres blancs et baromètres pour décrypter les enjeux RH, technologiques et juridiques de votre secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section (Linking Talents Inspired) */}
      <section className="py-10 bg-white border-b border-slate-100 sticky top-[72px] md:top-[88px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-start w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#F17A28] text-white shadow-md shadow-orange-500/10"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Rechercher une étude, un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-5 w-full bg-slate-50 border-slate-200 focus:bg-white rounded-md text-sm font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid (Linking Talents Cards Layout) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((res, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div className="p-6 space-y-4">
                    {/* Visual & Badges */}
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
                      <img
                        src={res.image}
                        alt={res.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-[#0B192C] px-2.5 py-1 rounded">
                          {res.type}
                        </span>
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-[#F17A28] px-2.5 py-1 rounded">
                          {res.category}
                        </span>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center space-x-2 text-xs text-slate-400 font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Publié en {res.date}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#F17A28] transition-colors duration-200 line-clamp-2 leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {res.description}
                    </p>
                  </div>

                  {/* Download Action */}
                  <div className="p-6 pt-0">
                    <Button
                      onClick={() => handleDownload(res.title)}
                      className="w-full bg-white hover:bg-[#F17A28] hover:text-white text-slate-800 border border-slate-200 hover:border-[#F17A28] font-bold py-5 rounded-md flex items-center justify-center space-x-2 shadow-sm transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span>Télécharger gratuitement</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100 max-w-xl mx-auto p-8 space-y-4">
              <FileText className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Aucune ressource trouvée</h3>
              <p className="text-sm text-slate-500">
                Nous n'avons pas trouvé de document correspondant à votre recherche. Essayez d'autres mots-clés ou modifiez vos filtres.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Tous");
                }}
                className="bg-[#0B192C] hover:bg-slate-800 text-white font-bold"
              >
                Réinitialiser la recherche
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Stay Informed (ALT RH CTA style) */}
      <section className="bg-[#0B192C] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(241,122,40,0.1),transparent_40%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Recevez nos prochaines études directement</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Inscrivez-vous à notre newsletter mensuelle pour être informé en priorité de la sortie de nos baromètres de rémunération et de nos guides sectoriels.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="bg-white/10 border-white/15 text-white placeholder:text-slate-400 focus:bg-white/15 py-5 rounded-md"
            />
            <Button
              onClick={() => toast.success("Inscription enregistrée avec succès !")}
              className="bg-[#F17A28] hover:bg-[#d66218] text-white font-bold py-5 rounded-md px-6 shrink-0"
            >
              S'abonner
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
