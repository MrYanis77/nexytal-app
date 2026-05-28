import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import expertisesData from "@/data/expertises.json";
import PageHeader from "@/components/PageHeader";
import ExpertiseCard from "@/components/ExpertiseCard";

export default function Expertises() {

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, []);

  return (
    <Layout>
      <PageHeader
        badge={expertisesData.header.badge}
        title={expertisesData.header.title}
        description={expertisesData.header.description}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-businesswoman-making-a-phone-call-while-looking-at-her-laptop-4449-large.mp4"
      />

      {/* Grid Section - Alternating layout line by line */}
      <section className="py-20 md:py-28 bg-page">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {expertisesData.expertises.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  id={exp.id}
                  className={`flex flex-col lg:flex-row gap-12 items-center scroll-mt-36 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card Section */}
                  <div className="w-full lg:w-1/2">
                    <ExpertiseCard
                      expertise={exp}
                      ctaPath="/contact"
                      ctaLabel="Découvrir le pôle"
                    />
                  </div>

                  {/* Details Section */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-3">
                      <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
                        {exp.subtitle}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                        {exp.detailTitle}
                      </h2>
                    </div>
                    <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                      {exp.detailDescription}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {exp.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                          <span className="text-sm font-bold text-slate-700 leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      {exp.externalUrl ? (
                        <a href={exp.externalUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-slate-900 hover:bg-slate-800 text-white font-black text-sm px-6 py-5 rounded-md flex items-center space-x-2 group">
                            <span>Découvrir le site</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      ) : (
                        <Link href={`/contact?pole=${encodeURIComponent(exp.contactPole)}`}>
                          <Button className="bg-slate-900 hover:bg-slate-800 text-white font-black text-sm px-6 py-5 rounded-md flex items-center space-x-2 group">
                            <span>Échanger sur votre besoin</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Synergie Section */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            {expertisesData.synergy.title}
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto text-sm">
            {expertisesData.synergy.description}
          </p>
          <Link href="/contact">
            <Button className="text-white font-bold px-8 py-5 rounded-md flex items-center space-x-2 mx-auto group"
              style={{ backgroundColor: "var(--brand)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)")}>
              <span>{expertisesData.synergy.buttonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
