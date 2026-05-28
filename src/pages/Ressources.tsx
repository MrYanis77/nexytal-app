import React, { useRef } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import ressourcesData from "@/data/ressources.json";
import PageHeader from "@/components/PageHeader";

const typeColors: Record<string, string> = {
  Guide: "bg-emerald-600",
  Étude: "bg-violet-600",
  Interview: "bg-amber-600",
  Webinar: "bg-sky-600",
};

const poleIcons: Record<string, string> = {
  Formations: "🎓",
  RH: "👥",
  Coaching: "🎯",
  Médicale: "🏥",
  Trainers: "📋",
  Recrutements: "🔍",
};

function RubriqueRow({ pole, ressources }: { pole: string; ressources: typeof ressourcesData.ressources }) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
  };

  if (ressources.length === 0) return null;

  return (
    <div className="space-y-5">
      {/* Rubrique Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{poleIcons[pole] ?? "📌"}</span>
          <h2 className="text-xl md:text-2xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            {pole}
          </h2>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: "var(--surface)", color: "var(--text-muted)", border: "1px solid var(--border-light)" }}>
            {ressources.length}
          </span>
        </div>
        {ressources.length > 3 && (
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border transition-all hover:shadow-sm cursor-pointer"
              style={{ borderColor: "var(--border-light)", backgroundColor: "var(--surface)", color: "var(--text-primary)" }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border transition-all hover:shadow-sm cursor-pointer"
              style={{ borderColor: "var(--border-light)", backgroundColor: "var(--brand)", color: "white" }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Cards Row */}
      <div
        ref={rowRef}
        className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {ressources.map((res) => (
          <Link key={res.slug} href={res.path}>
            <div
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border transition-all duration-300 flex flex-col cursor-pointer group shrink-0"
              style={{
                width: "280px",
                scrollSnapAlign: "start",
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-light)",
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={res.image}
                  alt={res.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className={`text-[10px] font-bold text-white uppercase tracking-widest px-2 py-0.5 rounded ${typeColors[res.type] ?? "bg-slate-700"}`}>
                    {res.type}
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold" style={{ color: "var(--text-muted)" }}>
                  <Calendar className="w-3 h-3" />
                  <span>{res.date}</span>
                </div>
                <h3 className="text-sm font-black leading-snug line-clamp-2 group-hover:opacity-80 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  {res.title}
                </h3>
                <p className="text-xs leading-relaxed line-clamp-2 flex-1" style={{ color: "var(--text-secondary)" }}>
                  {res.description}
                </p>
                <div className="pt-1 flex items-center space-x-1 text-xs font-extrabold" style={{ color: "var(--brand)" }}>
                  <span>Lire</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Ressources() {
  const poles = ressourcesData.poles.filter((p) => p !== "Tous");
  const ressources = ressourcesData.ressources;

  return (
    <Layout>
      <PageHeader
        badge={ressourcesData.header.badge}
        title={ressourcesData.header.title}
        description={ressourcesData.header.description}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-woman-working-with-a-laptop-at-her-home-desk-20093-large.mp4"
      />

      {/* Rubriques */}
      <section className="py-16 md:py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
          {poles.map((pole) => (
            <RubriqueRow
              key={pole}
              pole={pole}
              ressources={ressources.filter((r) => r.pole === pole)}
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "var(--footer-bg)", color: "white" }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            Restez informé des dernières tendances RH
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
            Recevez chaque mois nos nouvelles ressources, études et insights directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="py-5 rounded-md text-white placeholder:text-white/40"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.15)" }}
            />
            <Button
              onClick={() => toast.success("Inscription confirmée !")}
              className="text-white font-bold py-5 rounded-md px-6 shrink-0"
              style={{ backgroundColor: "var(--brand)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)")}
            >
              S'inscrire
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
