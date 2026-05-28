import React from "react";
import Layout from "../components/Layout";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import implantationData from "@/data/implantation.json";
import PageHeader from "@/components/PageHeader";

export default function Implantation() {
  const cardColors = implantationData.listing.cardColors;

  return (
    <Layout>
      <PageHeader
        badge={implantationData.header.badge}
        title={implantationData.header.title}
        description={implantationData.header.description}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-man-talking-on-the-phone-while-holding-a-file-31948-large.mp4"
      />

      {/* Map and Office Grid */}
      <section className="py-20 md:py-28 bg-page">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Office Cards */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>{implantationData.listing.label}</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {implantationData.listing.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {implantationData.offices.map((office, index) => (
                  <Card key={office.id} className={`bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow ${cardColors[index % cardColors.length]} p-5 space-y-4 text-left`}>
                    <div className="space-y-1">
                      <h4 className="text-lg font-black text-slate-900">{office.nom}</h4>
                    </div>
                    <div className="space-y-2 text-xs text-slate-600 font-medium">
                      <p className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{office.adresse}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <a href={`mailto:${office.mail}`} className="transition-colors"
                          onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                          onMouseLeave={e => (e.currentTarget.style.color = "")}>{office.mail}</a>
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column: Regional info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 rounded-xl w-fit border border-white/10" style={{ color: "var(--brand)" }}>
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">{implantationData.coverage.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {implantationData.coverage.paragraphs[0]}
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {implantationData.coverage.paragraphs[1]}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-800 space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{implantationData.coverage.ctaLabel}</p>
                  <p className="text-xs text-slate-300">{implantationData.coverage.ctaDescription}</p>
                  <Link href="/contact">
                    <Button className="w-full text-white font-bold rounded-md flex items-center justify-center space-x-2 group"
                      style={{ backgroundColor: "var(--brand)" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-hover)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)")}>
                      <span>{implantationData.coverage.ctaButtonText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
