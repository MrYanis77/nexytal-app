import React from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, BookOpen } from "lucide-react";

interface Section {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  quote?: {
    text: string;
    author: string;
  };
}

interface RessourcePageProps {
  pole: string;
  type: string;
  date: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  sections: Section[];
  keyPoints: string[];
}

export default function RessourcePage({
  pole,
  type,
  date,
  title,
  description,
  image,
  intro,
  sections,
  keyPoints,
}: RessourcePageProps) {
  return (
    <Layout>
      <PageHeader badge={pole} title={title} description={description} />

      {/* Hero image */}
      <div className="w-full h-[300px] md:h-[420px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Article body */}
      <section className="py-16 md:py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main column */}
            <article className="lg:col-span-2 space-y-12">

              {/* Intro */}
              <p
                className="text-base md:text-lg leading-relaxed font-medium border-l-4 pl-5 py-1"
                style={{ color: "var(--text-secondary)", borderColor: "var(--brand)" }}
              >
                {intro}
              </p>

              {/* Sections */}
              {sections.map((section, i) => (
                <div key={i} className="space-y-5">
                  <h2
                    className="text-xl md:text-2xl font-black tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {section.heading}
                  </h2>

                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {section.body}
                  </p>

                  {section.image && (
                    <div className="rounded-2xl overflow-hidden my-4 shadow-md">
                      <img
                        src={section.image}
                        alt={section.imageAlt ?? section.heading}
                        className="w-full h-[240px] md:h-[320px] object-cover"
                      />
                    </div>
                  )}

                  {section.quote && (
                    <blockquote
                      className="rounded-xl p-6 my-2 space-y-3"
                      style={{ backgroundColor: "var(--surface)", borderLeft: "4px solid var(--brand)" }}
                    >
                      <p
                        className="text-sm md:text-base italic leading-relaxed font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        « {section.quote.text} »
                      </p>
                      <footer
                        className="text-xs font-extrabold uppercase tracking-widest"
                        style={{ color: "var(--brand)" }}
                      >
                        — {section.quote.author}
                      </footer>
                    </blockquote>
                  )}
                </div>
              ))}

              {/* Key points */}
              {keyPoints.length > 0 && (
                <div
                  className="rounded-2xl p-6 md:p-8 space-y-4"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border-light)" }}
                >
                  <h2
                    className="text-lg font-black"
                    style={{ color: "var(--text-primary)" }}
                  >
                    À retenir
                  </h2>
                  <ul className="space-y-3">
                    {keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: "var(--brand)" }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                        <span
                          className="text-sm font-medium leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2">
                <Link href="/ressources">
                  <Button variant="outline" className="flex items-center space-x-2 font-bold">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Retour aux ressources</span>
                  </Button>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Info card */}
              <div
                className="rounded-2xl p-6 space-y-5 border sticky top-28"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border-light)" }}
              >
                <h3
                  className="text-sm font-extrabold uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  À propos
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: "var(--brand-light)", color: "var(--brand)" }}
                    >
                      <Tag className="w-4 h-4" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Pôle
                      </p>
                      <p className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {pole}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div
                      className="p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: "var(--brand-light)", color: "var(--brand)" }}
                    >
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Type
                      </p>
                      <p className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div
                      className="p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: "var(--brand-light)", color: "var(--brand)" }}
                    >
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Date
                      </p>
                      <p className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div
                  className="rounded-xl p-4 space-y-3 mt-2"
                  style={{ backgroundColor: "var(--footer-bg)" }}
                >
                  <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
                    Besoin d'accompagnement ?
                  </p>
                  <p className="text-xs font-bold text-white/80">
                    Un expert NEXYTAL vous répond sous 24h
                  </p>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full mt-1 border-white/20 text-white font-bold text-xs hover:bg-white/10"
                    >
                      Prendre contact
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}
