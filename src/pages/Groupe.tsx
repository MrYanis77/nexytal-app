import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Shield, Users, Target, Eye, Landmark } from "lucide-react";
import groupeData from "@/data/groupe.json";
import PageHeader from "@/components/PageHeader";

export default function Groupe() {
  const iconMap = { Shield, Users, Target };
  const values = groupeData.valuesSection.values;

  return (
    <Layout>
      <PageHeader
        badge={groupeData.header.badge}
        title={groupeData.header.title}
        description={groupeData.header.description}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-business-team-having-a-meeting-in-office-34762-large.mp4"
      />

      {/* Corporate Overview */}
      <section className="py-16 md:py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story & Vision */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>{groupeData.overview.vocationLabel}</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {groupeData.overview.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                {groupeData.overview.paragraphs[0]}
              </p>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                {groupeData.overview.paragraphs[1]}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">{groupeData.overview.highlights[0].title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-semibold">{groupeData.overview.highlights[0].description}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">{groupeData.overview.highlights[1].title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-semibold">{groupeData.overview.highlights[1].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 group">
                <img
                  src={groupeData.overview.image.src}
                  alt={groupeData.overview.image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>{groupeData.overview.image.badge}</p>
                  <p className="text-lg font-bold mt-1">{groupeData.overview.image.caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 section-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>{groupeData.valuesSection.label}</h2>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              {groupeData.valuesSection.title}
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              {groupeData.valuesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const Icon = iconMap[val.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-page text-left p-6 space-y-4">
                  <div className={`p-3 rounded-xl w-fit ${val.color}`}>
                    {Icon ? <Icon className="w-6 h-6" /> : null}
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
      <section className="py-16 md:py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Block */}
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl text-left space-y-6 relative overflow-hidden">
              <div className="p-3 bg-white/5 rounded-xl w-fit border border-white/10" style={{ color: "var(--brand)" }}>
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">{groupeData.visionMission.vision.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium">
                {groupeData.visionMission.vision.text}
              </p>
            </div>

            {/* Mission Block */}
            <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-2xl text-left space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl w-fit border border-emerald-500/20">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{groupeData.visionMission.mission.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {groupeData.visionMission.mission.text}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200">
                <Link href="/contact">
                  <Button className="text-white font-bold rounded-md flex items-center space-x-2 group"
                    style={{ backgroundColor: "var(--brand)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-hover)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)")}>
                    <span>{groupeData.visionMission.mission.buttonText}</span>
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
