import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft } from "lucide-react";
import homeData from "@/data/home.json";
import expertisesData from "@/data/expertises.json";
import ExpertiseCard from "@/components/ExpertiseCard";
import SectionIntro from "@/components/SectionIntro";

export default function Home() {
  const heroSlides = homeData.heroSlides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <Layout>
      {/* 1. Hero Section (Dynamic Carousel with fade transition) */}
      <section className="relative h-[500px] md:h-[620px] bg-slate-100 overflow-hidden text-slate-900 border-b border-slate-200">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-0 z-10"
              style={{
                background: "linear-gradient(to right, color-mix(in srgb, var(--page-bg) 92%, transparent) 0%, color-mix(in srgb, var(--page-bg) 75%, transparent) 45%, color-mix(in srgb, var(--page-bg) 20%, transparent) 70%, transparent 100%)",
              }}
            />
            <img
              src={slide.image}
              alt={`${slide.titleLine1} ${slide.titleLine2}`}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 md:px-6 w-full text-left">
                <div className="max-w-3xl space-y-6">
                  <span className="inline-block text-white text-xs font-extrabold tracking-widest px-3 py-1.5 rounded uppercase"
                    style={{ backgroundColor: "var(--brand)" }}>
                    {slide.badge}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
                    <span className="block">{slide.titleLine1}</span>
                    <span className="block">{slide.titleLine2}</span>
                  </h1>
                  <p className="text-lg text-slate-600 max-w-2xl font-semibold leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 pt-2">
                    <Link href="/expertises">
                      <Button className="text-white font-bold text-sm px-6 py-5 rounded-md flex items-center space-x-2 group" style={{ backgroundColor: "var(--brand)" }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-hover)")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)")}>
                        <span>Nos expertises</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-slate-300 hover:border-slate-400 text-slate-700 bg-white/80 hover:bg-white font-bold text-sm px-6 py-5 rounded-md">
                        Prendre RDV
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/60 hover:bg-white/90 text-slate-800 border border-slate-200/50 backdrop-blur-sm transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/60 hover:bg-white/90 text-slate-800 border border-slate-200/50 backdrop-blur-sm transition-all cursor-pointer"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="w-2.5 h-2.5 rounded-full transition-all cursor-pointer"
              style={{ backgroundColor: index === currentSlide ? "var(--brand)" : "", width: index === currentSlide ? "2rem" : "" }}
            />
          ))}
        </div>
      </section>

      {/* 2. Expertise Grid */}
      <section className="py-20 md:py-28 bg-page">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-20">
            <SectionIntro
              badge={homeData.expertisesHeader.badge}
              title={homeData.expertisesHeader.title}
              description={homeData.expertisesHeader.description}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {expertisesData.expertises.map((exp) => (
              <ExpertiseCard
                key={exp.id}
                expertise={exp}
                ctaPath={`/expertises#${exp.id}`}
                ctaLabel="Découvrir le pôle"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global Call to Action */}
      <section className="section-surface py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-6 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
            {homeData.cta.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            {homeData.cta.title}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            {homeData.cta.description}
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="text-white font-black px-8 py-6 rounded-md text-base flex items-center space-x-2 mx-auto group"
                style={{ backgroundColor: "var(--brand)", boxShadow: "var(--shadow-brand)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-hover)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)") }>
                <span>{homeData.cta.buttonText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
